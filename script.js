// COUNTRY SELECTOR
const selector = document.querySelector('#country-code');

const countriesStr = `🇨🇳 China +86
🇮🇳 India +91
🇺🇸 United States +1
🇮🇩 Indonesia +62
🇵🇰 Pakistan +92
🇧🇷 Brazil +55
🇳🇬 Nigeria +234
🇧🇩 Bangladesh +880
🇷🇺 Russia +7
🇲🇽 Mexico +52
🇯🇵 Japan +81
🇪🇹 Ethiopia +251
🇵🇭 Philippines +63
🇪🇬 Egypt +20
🇻🇳 Vietnam +84
🇩🇪 Germany +49
🇮🇷 Iran +98
🇹🇷 Turkey +90
🇨🇩 Congo +243
🇫🇷 France +33
🇹🇭 Thailand +66
🇬🇧 UK +44
🇮🇹 Italy +39
🇹🇿 Tanzania +255
🇿🇦 South Africa +27
🇰🇷 South Korea +82
🇲🇾 Malaysia +60
🇨🇴 Colombia +57
🇰🇪 Kenya +254
🇪🇸 Spain +34
🇦🇷 Argentina +54
🇩🇿 Algeria +213
🇸🇩 Sudan +249
🇺🇬 Uganda +256
🇺🇦 Ukraine +380
🇮🇶 Iraq +964
🇵🇱 Poland +48
🇨🇦 Canada +1
🇲🇴 Morocco +212
🇸🇦 Saudi Arabia +966`

const countriesArr = countriesStr.split('\n')

let numbers = [];
countriesArr.forEach(country => {
  numbers.push(country.match(/\+\d+/));
});
numbers = numbers.map(item => item[0]);

const names = [];
countriesArr.forEach(country => {
  names.push(country.match(/\w+\s\w+|\w+\s/))
});

for(let i = 0; i < 40; i++){
  let option = document.createElement('option');

}
 



