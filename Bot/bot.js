const { firefox } = require('playwright');


export default async function GoogleMaps(){
  const browser = await firefox.launch();
  const context = await browser.newContext({
      viewport: {
        width: 390,
        height: 844,
      },
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1',
    });
  const page = await context.newPage();
  await page.goto('https://www.google.com.br/maps')

  //
  await page.click('.K2FXnd.Oz0bd.oNZ3af.vrdm1c')
  await page.click('.NtcBjb.R30LOe.eD6Rpc.GnJVlc')
  await page.type('.sbib_b input', 'Taliari Pizzaria Mococa-São Paulo');
  await page.keyboard.press('Enter');
  await page.click('.TIHn2')
  let doc =  {
    "fotos":[]
  } 


  /*
  let titulo = await page.$('.DUwDvf.fontTitleLarge')
  titulo = await titulo.textContent()
  console.log(titulo)*/
  
  let imgs = await page.$$('.dryRY img')
  for(let i of imgs){
      doc['fotos'].push(await i.getAttribute('src'))
  }
  
  return doc


}