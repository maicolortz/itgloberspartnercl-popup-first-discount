import React from "react"
/* import { } from "vtex.modal-layout"; */
/* import { BulletSchema } from './BulletTypes'; */
import { useCssHandles } from "vtex.css-handles";
import "./styles.css"
const FirstDiscount = () => {
  const CSS_HANDLES = ["container", "info", "banner", "columna__one",
    "columna__two", "columna__three", "columna__four", "columna__five",
    "columna__one__container_img", "columna__one__img", "columna__one__text",
    "columna__two", "columna__two__text", "columna__three", "columna__three__text", "columna__four", "columna__four__text",
    "columna__five", "columna__five__input", "columna__five__button"]
  const handles = useCssHandles(CSS_HANDLES)

  return <div className={handles.container}>
    <section className={handles.info}>
      <div className={handles.columna__one}>
        <div className={handles.columna__one__container_img}>
          <img className={handles.columna__one__img} src="" alt="image column one" />
        </div>
        <p className={handles.columna__one__text}>Recibe ofertas exclusivas por email</p>
      </div>
      <div className={handles.columna__two}>
        <p className={handles.columna__two__text}>Disfruta</p>
      </div>
      <div className={handles.columna__three}>
        <p className={handles.columna__three__text}> 15% de descuento en tu primera compra</p>
      </div>
      <div className={handles.columna__four}>
        <p className={handles.columna__four__text}>Al registrarte podras recibir correos electronicos
        </p>
      </div>
      <div className={handles.columna__five}>
        <input className={handles.columna__five__input} type="email" />
        <button className={handles.columna__five__button}> Enviar</button>
      </div>

    </section>
    <section className={handles.banner}>
      <img src="" alt="image banner" />
    </section>
  </div>

}
export default FirstDiscount;
