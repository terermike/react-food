import restLogo from "../assets/logo.jpg";
export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={restLogo} alt="Restaurant logo" />
        <h1>REACT FOOD</h1>
      </div>
      <nav>
        <button>Cart (0)</button>
      </nav>
    </header>
  );
}
