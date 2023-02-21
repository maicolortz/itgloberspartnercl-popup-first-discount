import React, { useState, useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage";
import logovtex from "../assets/img/logovtex.png"
import promocion from "../assets/img/promocion.png"

import { useCssHandles } from "vtex.css-handles";
import QUERY_VALUE from "../graphql/getDataClients.graphql"
import SESION from "../graphql/getSession.graphql"
import CREATE_CLIENT from "../graphql/createClient.graphql"
import { useQuery, useMutation } from "react-apollo";
import { useDevice } from 'vtex.device-detector';
import PropTypes from "prop-types";
import "./styles.css"

type Props = {
  logoSrc: string
  bannerSrc: string
  titleDiscount: string
  mensaje: string
  discount: number
}
const FirstDiscount = ({ logoSrc, bannerSrc, titleDiscount, discount, mensaje }: Props) => {
  const { data } = useQuery(QUERY_VALUE)
  const sesion = useQuery(SESION);
  const { isMobile } = useDevice();
  const CSS_HANDLES = ["container", "modal__overlay", "modal__box", "modal__header", "modal__backdrop", "modal__close", "info", "banner", "columna__one",
    "columna__two", "columna__three", "columna__four", "columna__five",
    "columna__one__container_img", "columna__one__img", "columna__one__text",
    "columna__two", "columna__two__text", "columna__three", "columna__three__text",
    "columna__four", "columna__four__text",
    "columna__five", "columna__five__inscrito", "columna__five__input", "columna__five__button"]
  const handles = useCssHandles(CSS_HANDLES)
  const [email, setEmail] = useLocalStorage("email", "")
  const [inscrito, setInscrito] = useState(false)
  const [createClient] = useMutation(CREATE_CLIENT)
  const [open, setOpen] = useState(false);
  const [close, setClose] = useLocalStorage("close", "")

  useEffect(() => {
    if (sesion.loading === false) {
      if (sesion.data.getSession.profile === null && close !== "cerrado") {
        setOpen(true)
      }
    }

  }, [sesion])

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) {
      const existeEnData = data.users.data.find(function (e: {
        email: string
      }): boolean {
        return e.email === email
      })
      if (existeEnData) {
        alert("ya estas en la base de datos")
      } else {
        setInscrito(true);
        createClient(
          {
            variables: {
              email: email
            }
          }).then(() => {
            setInscrito(true);
            setClose("cerrado")
          }).catch(() => {
            alert("verifica tu direccion de correo electronico")
          })
      }
    } else {
      alert("La dirección de email es incorrecta.");
    }
  }

  const handleChange = (e: any) => {
    setEmail(e.target.value)
  }

  const Close = (close: boolean) => {
    setOpen(close)
    setClose("cerrado")
  }

  return <>

    {sesion.loading === false && open ?
      <div className={handles.modal__overlay} >

        <div onClick={() => setOpen(false)} className={handles.modal__backdrop}></div>

        <div className={handles.modal__box}>

          < div className={handles.modal__header} >
            <button onClick={() => Close(false)} value={close} className={handles.modal__close}>x</button>
          </div >

          <section className={handles.info}>
            <div className={handles.columna__one}>
              <div className={handles.columna__one__container_img}>
                <img className={handles.columna__one__img} src={logoSrc} alt="image column one" />
              </div>
              <p className={handles.columna__one__text}>{titleDiscount}</p>
            </div>
            <div className={handles.columna__two}>
              <p className={handles.columna__two__text}>{mensaje} </p>
            </div>
            <div className={handles.columna__three}>
              <p className={handles.columna__three__text}> {discount}% de descuento en tu primera compra</p>
            </div>
            <div className={handles.columna__four}>
              <p className={handles.columna__four__text}>Al registrarte podras recibir correos electronicos
              </p>
            </div>
            <div className={handles.columna__five}>
              {inscrito ?
                <div className={handles.columna__five__inscrito}>¡ Quedaste Inscrito !</div>
                : <form onSubmit={e => handleSubmit(e)} >

                  <input className={handles.columna__five__input} value={email} onChange={e => handleChange(e)} type="email" placeholder="Escribe tu correo" />
                  <button type="submit" className={handles.columna__five__button}>Inscribirse</button>
                </form>
              }
            </div>
          </section>
          <section className={handles.banner}>
            {isMobile === false ?
              <img src={bannerSrc} alt="image banner" />
              : <div></div>}
          </section>
        </div>

      </div >
      : null}
  </>
}

FirstDiscount.propTypes = {
  logoSrc: PropTypes.string,
  mensaje: PropTypes.string,
  bannerSrc: PropTypes.string,
  titleDiscount: PropTypes.string,
  discount: PropTypes.number
}
FirstDiscount.defaultProps = {
  logoSrc: logovtex,
  mensaje: "! Disfruta !",
  bannerSrc: promocion,
  titleDiscount: "Recibe ofertas exclusivas por email",
  discount: 15
}
FirstDiscount.schema = {
  title: "First Discount",
  type: "object",
  properties: {
    titleDiscount: {
      title: "mensaje promocional",
      type: "string"
    },
    mensaje: {
      title: "mensaje promocional",
      type: "string"
    },
    discount: {
      title: "valor del descuento",
      type: "number"
    },
    logoSrc: {
      title: "logo discount",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    bannerSrc: {
      title: "banner discount",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    }
  }
}
export default FirstDiscount;
