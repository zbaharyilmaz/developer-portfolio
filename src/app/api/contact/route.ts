import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, subject, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tüm alanları doldurunuz" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Geçerli bir email adresi giriniz" },
        { status: 400 }
      );
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email to you
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.EMAIL_TO || "your-email@example.com"],
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF9E00; border-bottom: 2px solid #FF9E00; padding-bottom: 10px;">
            🚀 Yeni Portfolio Mesajı
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">📝 Mesaj Detayları</h3>
            
            <p><strong>👤 Ad Soyad:</strong> ${firstName} ${lastName}</p>
            <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>📋 Konu:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #FF9E00; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">💬 Mesaj İçeriği</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(
              /\n/g,
              "<br>"
            )}</p>
          </div>
          
          <div style="background-color: #e8f4f8; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              📅 <strong>Gönderim Tarihi:</strong> ${new Date().toLocaleString(
                "tr-TR"
              )}
            </p>
            <p style="margin: 5px 0 0 0; color: #666; font-size: 14px;">
              🌐 <strong>Kaynak:</strong> Portfolio Contact Form
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [email],
      subject: "Mesajınız Alındı - Bahar Turksoy Portfolio",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF9E00; text-align: center;">
            🌟 Merhaba ${firstName}!
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Mesajınız başarıyla alındı! 🎉
            </p>
            <p style="font-size: 14px; color: #666;">
              En kısa sürede size dönüş yapacağım. Portfolio'ma gösterdiğiniz ilgi için teşekkür ederim.
            </p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://baharturksoy.com" 
               style="background-color: #FF9E00; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              🌐 Portfolio'mu Ziyaret Et
            </a>
          </div>
          
          <div style="background-color: #e8f4f8; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 0; color: #666; font-size: 14px; text-align: center;">
              Bahar Turksoy<br>
              Full Stack Developer
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      {
        message:
          "Mesajınız başarıyla gönderildi! Size en kısa sürede dönüş yapacağım.",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email gönderme hatası:", error);
    return NextResponse.json(
      {
        error: "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz.",
      },
      { status: 500 }
    );
  }
}
