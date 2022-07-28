<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nelson Philippe - Web Dev - Software Dev</title>
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/home.css">
    <link rel="stylesheet" href="css/about.css">

</head>
<body>
    <!-- components navbar -->
    <?php require "components/navbar.php" ?>




    <div class="container" id="container">
        <?php require "pages/home.php" ?>
        <?php require "pages/about.php" ?>
    </div>

    <?php require "components/footer.php"; ?>
</body>
</html>