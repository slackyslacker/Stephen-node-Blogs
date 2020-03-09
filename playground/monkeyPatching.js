const Page = require('puppeteer/lib/Page')

//before monkey patching

Page.prototype.login = async function () {
  const user = await userFactory()
  const { session, sig } = sessionFactory(user)

  await page.setCookie({ name: 'session', value: session })
  await page.setCookie({ name: 'session.sig', value: sig })
  await page.goto('localhost:3000')
  await page.waitFor('a[href="/auth/logout"]')
}

//another approach using classesconsole.clear()

class Page{
    goto(){
      console.log('Im going to another page')
    }
    setCookie(){
      console.log('Im setting a cookie')
    }
  }
  
  class CustomPage{
    constructor(page){
      this.page=page
    }
    login(){
      this.page.goto('localhost:3000')
      this.page.setCookie()
    }
  }
  
  const page = new Page()
  const customPage = new CustomPage(page)
  customPage.login()
  customPage.page.goto()