import Menu from "@components/Menu1"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
        Welcome to my Restuarent
        <br className="max"/>
        <span className="orange_gradient
        text-center">Hello</span>
        </h1>
        <p className="desc text-center">
            How are you
        </p>
        <Menu type="show"/>
    </section>
  )
}

export default Home