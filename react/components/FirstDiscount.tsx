import React, { useState } from "react"
/* import { } from "vtex.modal-layout"; */
/* import { BulletSchema } from './BulletTypes'; */
/* import { SearchBar } from "vtex.store-components" */
import { useCssHandles } from "vtex.css-handles";
import QUERY_VALUE from "../graphql/getDataClients.graphql"
import { useQuery } from "react-apollo";
/* import { Newsletter, FormEmailInput, FormSubmit, FormConfirmationCheckbox } from "vtex.store-newsletter" */
import "./styles.css"

const FirstDiscount = () => {
  const { data /* , loading */ } = useQuery(QUERY_VALUE)

  const CSS_HANDLES = ["container", "info", "banner", "columna__one",
    "columna__two", "columna__three", "columna__four", "columna__five",
    "columna__one__container_img", "columna__one__img", "columna__one__text",
    "columna__two", "columna__two__text", "columna__three", "columna__three__text",
    "columna__four", "columna__four__text",
    "columna__five", "columna__five__input", "columna__five__button"]
  const handles = useCssHandles(CSS_HANDLES)
  const [email, setEmail] = useState(null)

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const existeEnData = data.users.data.filter(function (e: {
      email: string
    }): boolean {
      return e.email === email
    })
    if (existeEnData.length) {
      alert("ya estas en la base de datos")
    } else {
      alert(" QUEDASTE INSCRITO")
    }

  }
  const handleChange = (e: any) => {
    setEmail(e.target.value)
    console.log("cambio : " + e.target.value)
  }

  return <div className={handles.container}>
    <section className={handles.info}>
      <div className={handles.columna__five}>
        <form onSubmit={e => handleSubmit(e)} >

          <input className={handles.columna__five__input} onChange={e => handleChange(e)} type="email" placeholder="Escribe tu correo" />
          <button type="submit" className={handles.columna__five__button}>Enviar</button>
        </form>
      </div>
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
        {console.log(data ? data.users.data : "aun no")}
      </div>

      {/*  <Newsletter className={handles.columna__five}
      >
        <FormEmailInput className={handles.columna__five__input}
        ></FormEmailInput>
        <FormSubmit  className={handles.columna__five__button} ><button>hello</button>
        </FormSubmit>
        <FormConfirmationCheckbox />
      </Newsletter> */}

    </section>
    <section className={handles.banner}>

      <img src="" alt="image banner" />
    </section>
  </div>

}
export default FirstDiscount;
