<!DOCTYPE html>
<html>
	<head>
		<title>Victor Carri</title>
		@push('scripts')
			<script type="application/javascript" src="{{ asset('js/index.js') }}"></script>
		@endpush
	</head>
	<body>
		<div id="root">
		</div>
		@stack('scripts')
	</body>
</html>
