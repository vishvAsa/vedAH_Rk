+++
title = "Computer setup"
unicode_script = "devanagari"
+++

## समानं कर्म
- अधः XYZ इति यद् अस्ति, तस्य स्थाने स्वीयं github-नाम प्रयुङ्क्ताम्।
  - अथवैतत् प्रयुज्यतां यन्त्रम्: <input id="input_githubUserId"></input><button id="transformId">पाठम् परिवर्तय!!</button>
- https://github.com/XYZ/vedAH_Rk इति पूर्वम् एव वर्तते चेन् निष्कासयतु browser-उपयोगेन।
- https://github.com/vishvAsa/vedAH_Rk इत्यत्र गत्वा पुनः fork इति करोतु। https://github.com/XYZ/vedAH_Rk इति किञ्चिल् लभ्यते।

## सङ्गणके समीचीनस्थानप्राप्तिः
- ततः समीचीनस्थाने terminal/ command-prompt इत्य् उद्घाट्य गच्छतु। यथा
  - `cd F:\Git\` इति windows पक्षे
  - `cd ~` इति linux पक्षे

## सञ्चिकाप्राप्तिः
- सङ्गणके समीचीनस्थानप्राप्तिः इति भागे यद् उक्तं तत् कृत्वा

```
git clone --single-branch --depth 1 --branch master https://github.com/XYZ/vedAH_Rk.git vedAH_Rk-master
cd vedAH_Rk-master
git remote add upstream https://github.com/vishvAsa/vedAH_Rk.git
git submodule update --init  themes/sanskrit-documentation-theme-hugo
cd ..

git clone --single-branch --depth 1 --branch content https://github.com/XYZ/vedAH_Rk.git vedAH_Rk-content
cd vedAH_Rk-content
git remote add upstream https://github.com/vishvAsa/vedAH_Rk.git
git pull upstream content
cd ..

git clone --single-branch --depth 1 --branch static_files https://github.com/XYZ/vedAH_Rk.git vedAH_Rk-static
cd vedAH_Rk-static
git remote add upstream https://github.com/vishvAsa/vedAH_Rk.git
git pull upstream static_files
cd ..
```

## hugo-चालनम्
- सङ्गणके समीचीनस्थानप्राप्तिः इति भागे यद् उक्तं तत् कृत्वा

```
cd vedAH_Rk-master
git pull upstream master
cd themes/sanskrit-documentation-theme-hugo/
git pull origin master
cd ../.. 
hugo server --renderToDisk --config ./config_dev.toml
```

## सञ्चिकासु प्राप्तासु सत्सु कार्यम्
- यदि कार्यम् vedAH_Rk-content इत्यस्मिन् क्रियते
    - `git pull upstream content` इति परिवर्तनानि लभ्यानि।
    - ततो नुदित्वाकर्षणाभ्यर्थनं https://github.com/XYZ/vedAH_Rk/tree/content इत्यत्र गत्वा प्रेषणीयम्।
- यदि कार्यम् vedAH_Rk-static इत्यस्मिन् क्रियते
    - `git pull upstream static_files` इति परिवर्तनानि लभ्यानि।
    - ततो नुदित्वाकर्षणाभ्यर्थनं https://github.com/XYZ/vedAH_Rk/tree/static_files इत्यत्र गत्वा प्रेषणीयम्।

<script>
module_uiLib.replaceWithQueryParam("githubUserId", /XYZ(?=[^'’])/g);

document.getElementById("transformId").onclick = function(e) {
  let userId = document.getElementById("input_githubUserId").value;
  console.log(userId);
  module_main.default.query.setParamAndGo("githubUserId", userId);
};
</script>