
import SeoHead from "../components/SeoHead";
import HomePage from "../components/Filters";
import Modal from "../components/misc/Modal";
import Layout from "../components/Layout/Layout";







export default function Home() {
  return (
    <>
      <SeoHead title='LaslesVPN Landing Page' />
      <Layout>
      <Modal />
      <HomePage />
      </Layout>
    </>
  );
}
