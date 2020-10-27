import React from "react";
import Countdown, { zeroPad } from "react-countdown-now";
import SimpleImageSlider from "react-simple-image-slider";

import kastruli from "./img/kastruli.jpg";
import clock from "./img/clock.png";
import redArrow from "./img/redArrow.png";
import like from "./img/like.png";
import clocLite from "./img/clocLite.png";
import dollar from "./img/dollar.png";
import pan1 from "./img/pan1.jpg";
import pan from "./img/pan.jpg";
import slide from "./img/slide.jpg";
import knifes from "./img/knifes.jpg";
import plaes from "./img/plates.jpg";
import slide5 from "./img/slide5.jpg";
import post1 from "./img/post1.png";
import post2 from "./img/post2.png";
import post3 from "./img/post3.png";
import slide22 from "./img/slide22.jpg";
import slide33 from "./img/slide33.jpg";

import styles from "./App.module.css";

const App = () => {
  const imagesOne = [{ url: `${pan1}` }, { url: `${knifes}` }];
  const imagesTwo = [
    { url: `${plaes}` },
    { url: `${knifes}` },
    { url: `${slide5}` },
  ];
  const imagesThree = [
    { url: `${post1}` },
    { url: `${post2}` },
    { url: `${post3}` },
  ];

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <span className={styles.count}>
        {zeroPad(days)} <div> : </div>
        {zeroPad(hours)}
        <div> : </div>
        {zeroPad(minutes)}
        <div> : </div>
        {zeroPad(seconds)}
      </span>
    );
  };

  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1>АВСТРИЙСКАЯ ПОСУДА</h1>
          <div>SWISS FAMILY PREMIUM</div>
        </div>
        <div>
          <img src={kastruli} alt="" />
        </div>
        <div className={styles.timerWrapper}>
          <div className={styles.textTimer}>
            <img src={clock} alt="" />
            <div className={styles.text}>
              До конца <span>АКЦИИ</span> <br></br> осталось:
            </div>
            <img className={styles.redArrow} src={redArrow} alt="" />
            <div>
              <div className={styles.timerTexts}>
                <div className={styles.timerText}>дней</div>
                <div className={styles.timerText}>часов</div>
                <div className={styles.timerText}>минут</div>
                <div className={styles.timerText}>секунд</div>
              </div>
              <Countdown date={Date.now() + 86400000} renderer={renderer} />
            </div>
          </div>
        </div>
        <div className={styles.wrapperKnives}>
          <h3> В подарок набор швейцарских ножей</h3>
        </div>
        <a href="#footer" className={styles.button}>
          КУПИТЬ СЕЙЧАС
        </a>
        <div className={styles.sale}>
          * осталось <span> 17 </span>наборов по акции
        </div>
        <div className={styles.wrapperPrice}>
          <div className={styles.boxPriceOne}>
            <div>Обычная цена:</div>
            <div>2763грн.</div>
          </div>
          <div className={styles.borderPrice}></div>
          <div className={styles.boxPriceTwo}>
            <div>Вы экономите 53%</div>
            <div>1299грн.</div>
          </div>
        </div>
        <div className={styles.wrapperDescription}>
          <div>
            <img className={styles.cercleImg} src={like} alt="" />
            <div>100% гарантия качества</div>
          </div>
          <div>
            <img className={styles.cercleImg} src={clocLite} alt="" />
            <div>12 приборов в комплекте</div>
          </div>
          <div>
            <img className={styles.cercleImg} src={dollar} alt="" />
            <div> Оплата при получении </div>
          </div>
        </div>
        <div className={styles.wrapperVideo}>Видео обзор</div>
        <div>
          <iframe
            title="myFrame"
            width="480"
            height="315"
            src="https://www.youtube.com/embed/hpfF21mVDgQ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className={styles.wrapperTitle}>
          К каждому комплекту подарок Швейцарских ножей!
        </div>
        <div>
          <SimpleImageSlider width={480} height={504} images={imagesOne} />
        </div>
        <div className={styles.descriptionCnife}>
          Набор профессиональных предметов с керамическим покрытием, которые не
          требуют заточки более двух лет. Это надежный и практичный помощник на
          кухне для каждой хозяйки! Данные дивайсы обладают очень стильным
          гармоничным дизайном, они удобно располагаются в руке, и легко помогут
          вам на кухне с любыми продуктами.
        </div>
        <div className={styles.happy}>
          РАДУЙТЕ БЛИЗКИХ КУЛИНАРНЫМИ ШЕДЕВРАМИ!
        </div>
        <div>
          <SimpleImageSlider width={480} height={504} images={imagesTwo} />
        </div>
        <div className={styles.descriptionText}>
          Блестящая нержавеющая сталь сохранит первоначальный блеск и форму
          надолго, а также она легко чистится и не вступает в реакцию с
          продуктами.
        </div>
        <div className={styles.titleTable}>ЧТО ВХОДИТ В НАБОР?</div>
        <div className={styles.wrapperTable}>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.td}>
                <td>Кастрюля с крышкой Ø 16</td>
                <td>Высота: 10,5 см - 2,1 л</td>
              </tr>
              <tr className={styles.td}>
                <td>Кастрюля с крышкой Ø 18 </td>
                <td>Высота: 11,5 см - 2,9 л</td>
              </tr>
              <tr className={styles.td}>
                <td>Кастрюля с крышкой Ø 20</td>
                <td>Высота: 12,5 см - 3,9 л</td>
              </tr>
              <tr className={styles.td}>
                <td>Кастрюля с крышкой Ø 24</td>
                <td>Высота: 14,5 см - 6,5 л</td>
              </tr>
              <tr className={styles.td}>
                <td>Ковш с крышкой Ø 16 </td>
                <td>Высота: 10,5 см - 2,1 л</td>
              </tr>
              <tr className={styles.td}>
                <td>Сковорода с крышкой Ø 24</td>
                <td> Высота: 7,5 см - 3,4 л</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.titleTable}>Описание</div>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.td}>
              <td>Источник тепла</td>
              <td>газ, электро, индукции, стеклокерамика, галоген</td>
            </tr>
            <tr className={styles.td}>
              <td>Материал ёмкостей</td>
              <td> высококачественная нержавеющая сталь</td>
            </tr>
            <tr className={styles.td}>
              <td>Материал крышки</td>
              <td> закалённое жаропрочное стекло с пароотводом</td>
            </tr>
            <tr className={styles.td}>
              <td>Эргономичные ручки</td>
              <td>+</td>
            </tr>
            <tr className={styles.td}>
              <td>Пятишаговое капсульное дно </td>
              <td>+</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.wrapperSale}>
          <span>
            + <br />
          </span>
          по <span> АКЦИИ</span> Вам подарок набор Швейцарских ножей!
        </div>
        <div className={styles.wrapperBigDesc}>
          <div className={styles.head}>
            Любой хозяйке будет приятно держать их в руках!
          </div>
          <img src={pan} alt="" />
          <div className={styles.content}>
            <div className={styles.contentTitle}>
              Преимущества набора <br /> SWISS FAMILY PREMIUM
            </div>
            <div className={styles.rowContent}>
              <img src={slide} alt="" width="150px" height="91px" />
              <div className={styles.row}>
                <span>Доступная цена</span>
                <div>
                  Всего за 1299 грн. Вы приобретаете набор посуды австрийского
                  качества из 12ти предметов и в подарок получаете набор
                  профессиональных предметов
                </div>
              </div>
            </div>
            <div className={styles.rowContent}>
              <div className={styles.row}>
                <span style={{ paddingLeft: "150px" }}>Внешний вид</span>
                <div style={{ textAlign: "right", paddingRight: "15px" }}>
                  Стильный элегантный дизайн украсит любую кухню! Кастрюли
                  надежно, практично и долговечно прослужат Вам!
                </div>
              </div>
              <img src={slide22} alt="" width="150px" height="91px" />
            </div>
            <div className={styles.rowContent}>
              <img src={slide33} alt="" width="150px" height="91px" />
              <div className={styles.row}>
                <span>Качество</span>
                <div>
                  Высококачественная нержавеющая сталь - материал
                  обеспечивающийся кастрюлям невероятную прочность,
                  гигиеничность. Ее подвержена коррозии и химически устойчива к
                  органическим кислотам, солям и щелочам. Безопасно для здоровья
                </div>
              </div>
            </div>
            <a
              href="#footer"
              className={styles.button}
              style={{ marginTop: "20px" }}
            >
              КУПИТЬ СЕЙЧАС
            </a>
            <div className={styles.sale} style={{ marginTop: "30px" }}>
              * осталось <span> 17 </span>наборов по акции
            </div>
          </div>
        </div>
        <div className={styles.reviews}>Отзывы из соц. сетей</div>
        <div className={styles.slider}>
          <SimpleImageSlider width={480} height={804} images={imagesThree} />
        </div>
        <div className={styles.zakaz}>
          Как заказать набор SWISS FAMILY PREMIUM
        </div>
        <div className={styles.wrapperFomrs}>
          <div>
            <div className={styles.rowOne}>
              <div>ЗАЯВКА</div>
              <div></div>
              <div>Оставляете заявку на нашем сайте</div>
            </div>
            <div className={styles.rowOne} style={{ marginTop: "20px" }}>
              <div>ОТПРАВКА</div>
              <div></div>
              <div>Доставляем заказ в течение 1-3 дней</div>
            </div>
          </div>
          <div>
            <div className={styles.rowOne}>
              <div>ЗВОНОК</div>
              <div></div>
              <div>Менеджер уточняет детали заказа</div>
            </div>
            <div className={styles.rowOne} style={{ marginTop: "20px" }}>
              <div>ПОЛУЧЕНИЕ </div>
              <div></div>
              <div>Оплачиваете при получении на почте</div>
            </div>
          </div>
        </div>
        <div className={styles.header}>
          <h1>АВСТРИЙСКАЯ ПОСУДА</h1>
          <div>SWISS FAMILY PREMIUM</div>
        </div>
        <div className={styles.timerWrapper}>
          <div className={styles.textTimer}>
            <img src={clock} alt="" />
            <div className={styles.text}>
              Это предложение <br></br> закончится через:
            </div>
            <img className={styles.redArrow} src={redArrow} alt="" />
            <div>
              <div className={styles.timerTexts}>
                <div className={styles.timerText}>дней</div>
                <div className={styles.timerText}>часов</div>
                <div className={styles.timerText}>минут</div>
                <div className={styles.timerText}>секунд</div>
              </div>
              <Countdown date={Date.now() + 86400000} renderer={renderer} />
            </div>
          </div>
        </div>
        <div>
          <img src={kastruli} alt="" />
        </div>
        <div
          className={styles.wrapperDescription}
          style={{ marginTop: "-4px" }}
        >
          <div>
            <img className={styles.cercleImg} src={like} alt="" />
            <div>100% гарантия качества</div>
          </div>
          <div>
            <img className={styles.cercleImg} src={clocLite} alt="" />
            <div>12 приборов в комплекте</div>
          </div>
          <div>
            <img className={styles.cercleImg} src={dollar} alt="" />
            <div> Оплата при получении </div>
          </div>
        </div>
        <div id="price" className={styles.wrapperPrice}>
          <div className={styles.boxPriceOne}>
            <div>Обычная цена:</div>
            <div>2763грн.</div>
          </div>
          <div className={styles.borderPrice}></div>
          <div className={styles.boxPriceTwo}>
            <div>Вы экономите 53%</div>
            <div>1299грн.</div>
          </div>
        </div>
        <div className={styles.inputs}>
          <form>
            <input
              id="input"
              className={styles.input}
              type="name"
              required
              placeholder="Введите Ваше имя"
            />
            <div></div>
            <input
              className={styles.input}
              type="phone"
              placeholder="Введите Ваш телефон"
              required
            />
            <button
              className={styles.castomButton}
              type="submit"
              value="required"
            >
              КУПИТЬ СЕЙЧАС
            </button>
          </form>
        </div>
        <div className={styles.sale} style={{ paddingBottom: "30px" }}>
          * осталось <span> 17 </span>наборов по акции
        </div>
      </div>
      <div id="footer" className={styles.wrapperFooter}>
        <div>СПД "МАНЬКО О.Ф." - ОГРН 4534321922723</div>
        <div>65049, Україна, м.Одеса, вул. Фрунзе 11/2</div>
        <div>Режим работы: Пн - Вс: 08:00 - 23:00</div>
        <div>Контактный телефон : + 38 (050) 174-28-38</div>
        <div className={styles.href}>
          <a href="https://swisslux12.islambot.ru/policy">
            Политика конфиденциальности
          </a>
          <a href="https://swisslux12.islambot.ru/agreement">
            Пользовательское соглашение
          </a>
          <a href="https://swisslux12.islambot.ru/warranty">
            Условия гарантии и возврата
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
