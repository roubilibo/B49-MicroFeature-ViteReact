import "./App.css";
// import MemeGenerator from "./MemeGenerator";
import { useState } from "react";

function App() {
	const [gajiPokok, setGajiPokok] = useState("");
	const [tunjangan, setTunjangan] = useState("");
	const [kewajiban, setKewajiban] = useState("");

	const gajiKotor = Number(gajiPokok) + Number(tunjangan);
	const gajiBersih = Number(gajiPokok) + Number(tunjangan) - Number(kewajiban);

	return (
		<>
			<div>
				<label>
					Gaji Pokok:
					<input
						type="text"
						value={gajiPokok}
						onChange={(e) => setGajiPokok(e.target.value)}
					/>
				</label>
				<br />
				<label>
					Tunjangan:
					<input
						type="text"
						value={tunjangan}
						onChange={(e) => setTunjangan(e.target.value)}
					/>
				</label>
				<br />
				<label>
					Kewajiban:
					<input
						type="text"
						value={kewajiban}
						onChange={(e) => setKewajiban(e.target.value)}
					/>
				</label>
				<br />
				<p>Gaji Kotor : {gajiKotor}</p>
				<p>Gaji Pokok : {gajiPokok}</p>
				<p>Gaji Bersih: {gajiBersih}</p>
			</div>
			{/* 
			<h1>MEME GENERATOR</h1>
			<div className="card">
				<MemeGenerator />
			</div> */}
		</>
	);
}

export default App;
