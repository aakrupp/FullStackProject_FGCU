import React from "react"
import { type NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";

const HomeScreen: NextPage= () => { // React Next.js "function"
  return ( // the return for the page
    <Layout>
      <div className="page">
        <h1>Home</h1>
        <main>
          <Link href='./eventPages/events'><button>Events</button></Link>
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default HomeScreen; // export the page
