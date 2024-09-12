<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CEK KHODAM RILL NO FEKFEK</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: url('https://example.com/system-background.jpg') no-repeat center center fixed;
            background-size: cover;
            color: #f8f9fa;
            text-align: center;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: rgba(0, 0, 0, 0.7);
            color: #f8f9fa;
            padding: 15px 0;
            font-size: 18px;
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
        }

        .clock {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 10px;
        }

        .clock img {
            height: 30px;
            margin-right: 10px;
        }

        main {
            margin-top: 60px;
            padding: 20px;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 10px;
        }

        h1 {
            font-size: 36px;
            color: #f8f9fa;
            margin-top: 30px;
        }

        p {
            font-size: 18px;
            color: #f8f9fa;
        }

        input[type="text"] {
            padding: 10px;
            font-size: 16px;
            width: 80%;
            max-width: 400px;
            margin: 20px 0;
            border: 2px solid #f8f9fa;
            border-radius: 5px;
            background-color: #343a40;
            color: #f8f9fa;
        }

        button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #007bff;
            color: #fff;
            border: none;
            cursor: pointer;
            border-radius: 5px;
        }

        button:hover {
            background-color: #0056b3;
        }

        #result {
            margin-top: 30px;
            font-size: 24px;
            color: #28a745;
        }

        footer {
            margin-top: 30px;
            padding: 15px;
            background-color: rgba(0, 0, 0, 0.7);
            color: #f8f9fa;
            font-size: 14px;
            text-align: center;
        }

        footer a {
            color: #f8f9fa;
            text-decoration: none;
            margin: 0 10px;
        }
    </style>
</head>
<body>
    <header>
        <div class="clock">
            <img src="https://example.com/clock-icon.png" alt="Clock Icon">
            <span id="time"></span>
        </div>
        Cek Khodam - Created by r1dzz..999+
    </header>
    <main>
        <h1>CEK KHODAM RILL NO FEKFEK</h1>
        <p>Masukkan nama Anda untuk mengetahui khodam apa yang ada di dalam dirimu</p>
        <input type="text" id="nameInput" placeholder="Masukkan Nama Anda">
        <button onclick="checkKhodam()">Cek Khodam</button>
        <div id="result"></div>
    </main>
    <footer>
        <h3>Contact me</h3>
        <a href="https://wa.me/6281902057636" target="_blank">WhatsApp</a>
        <a href="https://www.tiktok.com/@er.rdh?_t=8pf1M1C44lF&_r=1" target="_blank">TikTok</a>
        <a href="https://www.instagram.com/rdhoselalualways?igsh=MWFtYzRvcGVqdHgwYQ==" target="_blank">Instagram</a>
    </footer>
    <script>
        function checkKhodam() {
            const names = [
                "curut ngudut", "ban dalam", "karbu PE", "truno lele", "wafer tango", "bis tayo", "roger sumatra",
                "Gorilla Ngopi", "Opah", "Uranium", "Gajah Ngiler", "Sedotan Mixue", "Mejikom", "Ganjar", "Sandal Swallow",
                "Ikat Rambut", "Beat Karbu", "Remot AC", "Lele", "Air Kobokan", "Kuyang Pargoy", "Kotak Amal", "Panci",
                "Ular Garaga Mas Panji", "Sosok Tunggu Kiris", "Baterai HP kembung", "Mediatek", "Naga hitam asli Jawa",
                "Trenggiling Cirebon", "Kairi Kumar", "Macan tutul", "Tuyul", "Ambaruwo", "Prabowo", "Anies", "Mulyono",
                "Kloset", "Sabun Sunlight", "Knalpot DPJ", "Tromol", "MX King", "Polisi Tidur", "Ular berkepala Ikan",
                "Dinosaurus", "Kecoa", "Ikan Mujaer", "Ikan Kerapu", "Lemari", "Bis Tayo", "Sepatu Adidas", "Kulkas",
                "Botol Tupperware", "Speaker Bluetooth", "TWS", "Lampu Biled"
            ];
            const nameInput = document.getElementById('nameInput').value;
            const randomIndex = Math.floor(Math.random() * names.length);
            const khodam = names[randomIndex];
            document.getElementById('result').innerText = `Khodam Anda adalah: ${khodam}`;
        }

        function updateClock() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
        }

        setInterval(updateClock, 1000);
        updateClock();
    </script>
</body>
</html>
