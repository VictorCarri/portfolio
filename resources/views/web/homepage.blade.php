@php
	use Illuminate\Support\Facades\Log;
	Log::debug("Loading Blade template");
@endphp
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie-edge">
		<title>Victor Carri</title>
	{--	@push('scripts')
			<script defer type="application/javascript" src="{{ asset('js/index.js') }}"></script>
		@endpush--}
	</head>
	<body>
		<div id="root">
		</div>
		{--@stack('scripts')--}
		{{ request()->secure() ? 'HTTPS' : 'HTTP' }}
	</body>
</html>
