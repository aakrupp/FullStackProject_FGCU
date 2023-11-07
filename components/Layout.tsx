import React, { ReactNode } from "react";
import Header from "./Header";
import { useUserState } from './User';
import Link from "next/link";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const { user } = useUserState();

  if(user) {
      return (
      <div>
        <Header />
        <div className="layout">{props.children}</div>
        <style jsx global>{`
          html {
            box-sizing: border-box;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            margin: 0;
            padding: 0;
            font-size: 16px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
              "Segoe UI Symbol";
            background: rgba(0, 0, 0, 0.05);
          }

          input,
          textarea {
            font-size: 16px;
          }

          button {
            cursor: pointer;
          }
        `}</style>
        <style jsx>{`
          .layout {
            padding: 0 2rem;
          }
        `}</style>
      </div>
    );
  } else {
      return (
      <div>
        <div className="layout">Not signed in. Press Login to continue: <Link href={'../pages/login.tsx'}><button>Login</button></Link></div>
        <style jsx global>{`
          html {
            box-sizing: border-box;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            margin: 0;
            padding: 0;
            font-size: 16px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
              "Segoe UI Symbol";
            background: rgba(0, 0, 0, 0.05);
          }

          input,
          textarea {
            font-size: 16px;
          }

          button {
            cursor: pointer;
          }
        `}</style>
        <style jsx>{`
          .layout {
            padding: 0 2rem;
          }
        `}</style>
      </div>
    );
  }
};

export default Layout;
