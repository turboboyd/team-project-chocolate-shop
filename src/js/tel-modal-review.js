var inputs = document.querySelectorAll('.phone-input');
var countryContainers = document.querySelectorAll('.country-container');

for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i];
  var countryContainer = countryContainers[i];

  var intlTelInput = window.intlTelInput(input, {
    initialCountry: 'ua',
    separateDialCode: true,
    utilsScript:
      'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
  });

  input.addEventListener('change', function () {
    var selectedCountryData = intlTelInput.getSelectedCountryData();
    var dialCode = selectedCountryData.dialCode;
    var phoneNumber = intlTelInput.getNumber();
    var formattedPhoneNumber = intlTelInput.getNumber(
      intlTelInputUtils.numberFormat.E164
    );
    var prefixedPhoneNumber = phoneNumber;
    input.value = prefixedPhoneNumber;
  });
}
