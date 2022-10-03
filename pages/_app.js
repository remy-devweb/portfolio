import '../styles/globals.css'
import { ThemeProvider } from 'next-themes';
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function MyApp({ Component, pageProps }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey = '6LfAzS0hAAAAAPxDamVpP9xITR2E-XmE-5iwkdku'
      scriptProps={{
        async: true,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <ThemeProvider enableSystem={false} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </GoogleReCaptchaProvider>
    )
}

export default MyApp
