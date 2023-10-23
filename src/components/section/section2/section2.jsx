import React from "react";
import ExIcon from "../images/customer-review.png";
import "./section2.css";
import loc from "../images/location.png";
import sys from "../images/global-learning.png";
import ev from "../images/billboard.png";
import ms from "../images/presentation.png";
import ex from "../images/checklist.png";

function Section2() {
  return (
    <section>
      <div id="about">
        <div className="h1lar">
          <h1 className="ptext" data-aos="zoom-in">
            Nima uchun aynan Harvard schoolni tanlashingiz kerak?
          </h1>
          <p className="ptext2" data-aos="zoom-in-up">
            Bizning o'quv markazimiz quyidagi afzalliklarga ega
          </p>
        </div>
        <div className="cards">
          <div className="card1" data-aos="flip-left">
            <div className="icon1">
              <img src={ExIcon} alt="" />
            </div>

            <div className="text1">
              <h1>Tajribalik ustozlar</h1>
              <p>
                Bizda 10 yillik tajribaga ega va IELTS darajasi 9.0 gacha
                bo'lgan ustozlar bor.
              </p>
            </div>
          </div>

          <div className="card1" data-aos="flip-left">
            <div className="icon1">
              <img src={loc} alt="" />
            </div>

            <div className="text1">
              <h1>Bizning manzilimiz</h1>
              <p>
                Bizning o'quv markazimiz xamma uchun qulay bo'lgan joyda
                joylashgan.
              </p>
            </div>
          </div>

          <div className="card1" data-aos="flip-left">
            <div className="icon1">
              <img src={sys} alt="" />
            </div>

            <div className="text1">
              <h1>Bizning tizim</h1>
              <p>Bizdagi tizim Buyuk Britaniya ta'limidan olingan. </p>
            </div>
          </div>

          <div className="card1" data-aos="flip-left">
            <div className="icon1">
              <img src={ms} alt="" />
            </div>

            <div className="text1">
              <h1>Bepul master classlar</h1>
              <p>
                Bizda har hafta profesional ustozlar tomonidan bepul master
                class darslari bo'lib o'tadi.
              </p>
            </div>
          </div>

          <div className="card1" data-aos="flip-left">
            <div className="icon1">
              <img src={ex} alt="" />
            </div>

            <div className="text1">
              <h1>Bepul imtihon olish</h1>
              <p>
                Bizda bepul imtihon yani "Mock" testlar topshirish imkoniyati
                mavjud.{" "}
              </p>
            </div>
          </div>

          <div className="card1" data-aos="flip-left">
            <div className="icon1">
              <img src={ev} alt="" />
            </div>

            <div className="text1">
              <h1>Tadbirlar</h1>
              <p>
                Bizda kurs davomida turlihil sovrinli bellashuvlar bo'lib
                o'tadi.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
