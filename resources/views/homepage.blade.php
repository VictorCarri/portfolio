@push('scripts')
	<script type="application/javascript" src="{{ asset('js/index.js') }}"></script>
@endpush
<!DOCTYPE html>
<html>
	<head>
		<title>Victor Carri</title>
		<!-- <script type="application/javascript" src="{{ asset('js/index.js') }}"></script> -->
		@stack('scripts')
	</head>
	<body>
		<div id="root">
		</div>
		<div id="test1">
			Test
		</div>
		<div id="test2">
		{{ asset("js/index.js") }}
		</div>
	</body>
</html>
