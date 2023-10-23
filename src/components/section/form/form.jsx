import React, { useState } from "react";
import "./form.css";
import ru from "../images/107f5495861bc70a6ce8dd27071b597b.jpg";
import eng from "../images/eng.jpg";
import arabia from "../images/arabia.jpg";
import cor from "../images/953ef3bce8d4aec0b8c03153947dcc84.jpg";
// import { emojiCursor } from "cursor-effects";

// new emojiCursor({ emoji: ['⚫️', '🔴'] });

function Form() {
  const [data, setData] = useState({
    name: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData(() => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.name || !data.phoneNumber) {
      alert("Please enter a name and phone number");
      return;
    }

    const telegramToken = "6342492642:AAECfWC65cozPMWTdlJM8ZXSBL6Pec8HlUw";
    const chatId = "-4069002335";

    const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
    const data1 = new URLSearchParams({
      chat_id: chatId,
      text: `
          Name: ${data.name}\n Phone number: ${data.phoneNumber}
          `,
    });

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data1,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Message sent:", data);
        alert("Message sent successfully!");
      })
      .catch((error) => console.error("Error:", error));

    setData({
      name: "",
      phoneNumber: "",
    });
  };
  return (
    <div className="section-form">
      <h1 className="form-about" data-aos="zoom-in-up">
        Biz haqimizda
      </h1>
      <div className="form-main" data-aos="zoom-in-up">
        <div
          className="form-left"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h2>
            Bizning o'quv markazimizda qanday tillarni o'rganishingiz mumkin?
          </h2>

          <div className="lan">
            <div className="languages">
              <img src={eng} alt="" />
              <h1>INGIZ TILI</h1>
            </div>

            <div className="languages">
              <img src={ru} alt="" />
              <h1>RUSS TILI</h1>
            </div>

            <div className="languages">
              <img src={arabia} alt="" />
              <h1>ARAB TILI</h1>
            </div>

            <div className="languages">
              <img src={cor} alt="" />
              <h1>KOREYS TILI</h1>
            </div>
          </div>
        </div>

        <div className="form-right" data-aos="fade-left" id="form">
          <div
            className="forms"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h1>Kurslarimizga yoziling</h1>

            <p>
              Ismingizni va telefo'n raqamingizni qoldiring o'zimiz siz bilan
              bog'lanamiz
            </p>

            <form className="formlar" onSubmit={handleSubmit}>
              <input
                className="inputlar"
                type="text"
                name="name"
                placeholder="ismingiz...."
                value={data.name}
                onChange={handleChange}
              />
              <input
                className="inputlar"
                type="text"
                placeholder="+998-(90)-123-45-67"
                name="phoneNumber"
                value={data.phoneNumber}
                onChange={handleChange}
              />
              <button>YUBORISH</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
