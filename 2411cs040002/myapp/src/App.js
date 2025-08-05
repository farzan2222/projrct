<DOCTYPE html>
<html>
<head>
    <title>User Information Form</title>
    <style>
        body {
      font-family: Arial, sans-serif;
      background-color: #eef2f3;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .form-box {
      border: 2px solid #444;
      border-radius: 12px;
      padding: 25px;
      width: 350px;
      background-color: #ffffff;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
    .form-box label {
      display: block;
      margin-top: 15px;
      font-weight: bold;
    }
    .form-box input,
    .form-box textarea,
    .form-box select {
      width: 100%;
      padding: 8px;
      margin-top: 5px;
      border: 1px solid #ccc;
      border-radius: 6px;
      box-sizing: border-box;
    }
    .form-box button {
      margin-top: 20px;
      padding: 10px;
      width: 100%;
      background-color: #007BFF;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
    .form-box button:hover {
      background-color: #0056b3;
    }
    h1{
        text-align:center;
    }
  </style>

</head>
<body>
    <center>
        <h1>User Information Form</h1>

        <div class="form-box">
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name">

                <label for="shortbio">Short Bio:</label>
                <textarea id="shortbio" name="shortbio"></textarea>

                <label for="profilepicture">Profile Picture:</label>
                <input type="file" id="profilepicture" name="profilepicture">

                <label for="border">Border Style:</label>
                 <select id="border" name="borderStyle">
                  <option>Square</option>
                </select>


                <input type="submit" value="Submit">
            </form>
        </div>
    </center>

</body>
</html>

 