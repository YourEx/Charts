var utils = {
  registerTemplate(tmplHtml: string){
    $(tmplHtml).append(tmplHtml);
  }
}

export = utils;
