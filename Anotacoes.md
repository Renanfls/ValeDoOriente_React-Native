## **Requisitos para iniciar um projeto React Native:**

- Node -> https://nodejs.org/pt-br/
- Npm -> `npm install` (no terminal)
- Expo -> `npm install --global expo-cli@4.7.2` (no terminal)

Para rodar a aplicação no seu `celular` ou `tablet`, é só baixar o app do `Expo` na `Google Play` ou na `App Store`.

## **Cria base do projeto com o Expo:**

- `npx create-expo-app nomeDoProjeto` (no terminal)
- `cd nomeDoProjeto` (no terminal)

## **React Native vs Expo**

- Utilizando o Expo não precisamos instalar o ambiente Java com Android Studio ou Xcode, pois ele é enviado diretamente ao aplicativo do Expo instalado no celular que já inclui os códigos nativos necessários.
- Os aplicativos criados com o Expo em geral ocupam um pouco mais de espaço no celular do que aplicativos criados da forma tradicional em React Native, pois o expo já mantém todos os recursos necessários em caso de atualizações OTA.
Por permitir atualizações sem envio de um novo arquivo para as lojas de aplicativos, o Expo já adiciona na base do aplicativo todos os códigos fontes de funcionalidades que ele permite na aplicação, mesmo que não estejamos utilizando no momento.

## **Limitações do Expo:**

- As APIs de bluetooth, WebRTC e compras integradas com as lojas Play Store e App Store ainda não foram implementadas.
- Áudio tocando de fundo quando a aplicação está fechada com controle do sistema ainda não funciona.
- Aplicações que precisam ser extremamente pequenas requerem builds manuais mais complexos.
- Bibliotecas nativas proprietárias que não são muito utilizadas não estão disponíveis no Expo para evitar aumentar o tamanho do aplicativo.
- Serviços de notificações via push, com exceção do Expo notification service, podem necessitar de implementações manuais mais complexas.
- As SDKs mínimas suportadas são Android 5 e iOS 10.
- A versão gratuita pode gerar filas na hora do build para produção.
- O tamanho máximo de assets que podem ser atualizados via OTA é 50 MiB.
- Alterações nativas são necessárias para publicar apps que têm um público alvo menor de 13 anos.

## **Componentes**

### **Exportando componentes**

Se usa `{}` para pegar componentes que foram exportados de algum arquivo. 

```
import { Text } from 'react-native';
```

Para utilizar o componente em outros arquivos deve-se exporta o mesmo. Basta adicionar um `export` antes da função. 

Quando não se usa chaves só é possível pegar um componente. Por trás dos panos está exportando como `default`, então basta adicionar um `export default`. E como ele é padrão, só pode se ter um, podendo assim exportar sem as chaves.

```
export default function Carrinho() {}
```

#

`StatusBar` => Barra de status, na parte do topo do celular
- O padrão do expo é branco
- O padrão do react-native é preto

`SafeAreaView` => faz com que no iOS apenas, `barra de status` e a `barra de ações` que tem em iPhones mais recentes, têm uma barra virtual, ela é evitada pelo que está dentro. Então é criada uma margem por fora.

`Dimensions` => API que pega o Height e a Width do dispositivo 
```
const width = Dimensions.get('screen').width;
```

`StyleSheet` => Utiliza para criar os estilos no React Native e ele otimiza os estilos

#

## **Fragmento `<></>`**

Agrupa outros componentes e funciona basicamente como uma `<div>`. Ele agrupa sem ter a necessidade de criar uma `View`
```
export default function ShoppingCart() {
    return <>
        <Image source={banner} style={styles.banner} />
        <Text></Text>
    </>
}
```
A `<Image>` e o `<Text>` vão ser irmãs da `<StatusBar>`

## **Font**

https://docs.expo.dev/guides/using-custom-fonts/#using-a-google-font

**Terminal**
```
npx expo install expo-font @expo-google-fonts/nomeDaFont
```
**App.js**
```
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
```
**Function App()**
```
export default function App() {
  const [fontLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular, // "MontserratRegular" é um nome personalizado
    "MontserratBold": Montserrat_700Bold,
  })
}
```

Para fazer uso da font basta colocar o nome personalizado definido

#

Caso App fique sem internet não tem problema, pois os arquivos das font já foram baixados no momento que se roda o `npx expo install expo-font @expo-google-fonts/nomeDaFont` e fica armazenado na origem do projeto dentro da pasta `node_modules/@expo-google-fonts`

#

## **Botões**

`TouchableOpacity` => add opacidade quando o botão é interagido 
- `onPress` => atribui uma função
- `disabled` => desabilitar

`ActivityIndicator` => Add animação de loading 

#
## **Icones**

```
import { nomeDaLib } from '@expo/vector-icons'
```

```
<nomeDaLib size={} color={} name="nomeDoIcone" />
```

```
export function Button(iconName) {
  return (
    {iconName && <nomeDaLib
      size={} 
      color={} 
      name={keyof typeof nomeDaLib.glypMap} 
    />}
  );
}
```