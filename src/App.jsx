import "./styles.css";
import Experience from "./Experience";

export default function App({ shoeColor, setShoeColor }) {
	console.log(shoeColor);

	return (
		<div className="App app-size">
			<h1>Heading One</h1>
			<p>
				SLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Cras tincidunt
				lobortis feugiat vivamus at augue eget. Sem fringilla ut morbi tincidunt
				augue interdum velit euismod. Aliquet nec ullamcorper sit amet risus.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				augue interdum velit euismod. Aliquet nec ullamcorper sit amet risus.
			</p>
			<ul>
				<li>Fact 1</li>
				<li>Fact 1</li>
				<li>Fact 1</li>
				<li>Fact 1</li>
				<li>Fact 1</li>
				<li>Fact 1</li>
				<li>Fact 1</li>
			</ul>
			<div className="size-color-container">
				<div>
					<div>Sizes</div>
					<button>XS</button>
					<button>S</button>
					<button>M</button>
					<button>L</button>
					<button>XL</button>
				</div>

				<div className="color-container">
					<div>Colors</div>
					<button>Green</button>
					<button>Beige</button>
					<button>Orange</button>
					<button>Blue</button>
					<button>Mustard</button>
				</div>
			</div>
		</div>
	);
}
