<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="root">

</div>
<script>
    window.user = JSON.parse('{!! json_encode(auth()->user())!!}');
</script>
<script src="{{mix('js/app.js')}}"></script>
</body>
</html>
