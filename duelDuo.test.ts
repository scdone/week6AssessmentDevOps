
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays choices', async () => {
    await driver.findElement(By.id('draw')).click()
    // await driver.sleep(4000)
    let choicesDiv = await driver.findElement(By.id('choices'))
    let displayed = choicesDiv.isDisplayed()
   
    expect(displayed).toBeTruthy()
})

test('Add to Duo button displayed the player-id div', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.xpath('//section/div/div/button')).click()
    let playerDuo = await driver.findElement(By.id('player-duo'))
    let displayed = playerDuo.isDisplayed()

    expect(displayed).toBeTruthy()

})





// const seeAllBtnTest = async (driver) => {
//     await driver.findElement(By.id('see-all')).click()
//     const allBots = await driver.findElement(By.id('all-bots'))
//     const displayed = allBots.isDisplayed()
//     expect(displayed).toBeTruthy()
// }



// test('see all bots button displays all bots', async () => {
//     await seeAllBtnTest(driver)
// })



