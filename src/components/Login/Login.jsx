import React, { useEffect } from "react";

import { Button, Placeholder, Animation, Icon, Alert } from "rsuite";
import { Box, TextField, Form } from "UIElements";
import { useShow } from "utils";
import "./Login.scss";
import model from "./model";
import i18n from "i18n";

export const blockName = "login-page-wrapper";

const { Fade } = Animation;

const Login = ({ onLogin, loading, errorKey }) => {
  const showContent = useShow();

  useEffect(() => {
    if (errorKey) {
      Alert.error(`${i18n.ERROR[errorKey]}`, 0);
    }
  }, [errorKey, loading]);

  return (
    <div className={blockName}>
      <Box className={`${blockName}__box`}>
        <Fade in={showContent} className={`${blockName}__faded-content`}>
          {(props) => (
            <div {...props}>
              <h1>¡Bienvenido!</h1>
              <Placeholder.Paragraph
                graph="image"
                active
                rows={3}
                className={`${blockName}__presentation`}
              />
              <span className={`${blockName}__separator`} />
              <Form
                model={model}
                className={`${blockName}__form`}
                render={(formRef) => (
                  <>
                    <Button
                      block
                      className={`${blockName}__google-button`}
                      size="lg"
                      disabled={loading}
                    >
                      <Icon icon="google" /> Iniciar sesion con Google
                    </Button>
                    <span className={`${blockName}__google_separator`}>o</span>
                    <TextField name="email" placeholder="Correo electronico" />
                    <TextField
                      name="password"
                      placeholder="Contraseña"
                      type="password"
                    />
                    <Button
                      onClick={() => onLogin(formRef)}
                      block
                      color={loading ? "" : "orange"}
                      loading={loading}
                      appearance="default"
                      size="lg"
                    >
                      Entrar
                    </Button>
                  </>
                )}
              />
            </div>
          )}
        </Fade>
      </Box>
    </div>
  );
};

export default Login;
