function formatJson(str){str=str.replace(/\r/g,"");str=str.replace(/\n/g,"");str=str.replace(/\t/g,"");str=str.replace(/\f/g,"");str=str.replace(/\\/g,"\\\\");str=str.replace(/\"/g,"\\\"");str=str.trim();return str}var postJSON="";$("#post_list").children().each(function(){if($(this).get(0).tagName!="DIV")return;var title=$(this).find(".titlelnk").text();title=formatJson(title);var ID=$(this).find(".diggnum").attr("id");ID=ID.substr(ID.lastIndexOf("_")+1);var digg=$(this).find(".diggnum").text();var headerimg=$(this).find(".pfs");var header="";if(headerimg.length>0){header=headerimg.attr("src")}var summary="";var post_item_foot=$(this).find(".post_item_foot");var date=post_item_foot.clone().children().remove().end().text();date=date.replace("发布于","").trim();var author=post_item_foot.children(":first-child").text();var url1=post_item_foot.children(":first-child").attr("href");var authorID=url1.substr(url1.lastIndexOf("www.cnblogs.com/")+16);authorID=authorID.substr(0,authorID.length-1);var view=post_item_foot.contents(":nth-child(3)").text();var url=post_item_foot.contents(":nth-child(3)").children(":first-child").attr("href");view=view.substr(view.indexOf("(")+1);view=view.replace(")","");var comment=post_item_foot.contents(":nth-child(2)").text();comment=comment.substr(comment.indexOf("(")+1);comment=comment.replace(")","");if(postJSON.length==0){postJSON="{\"ID\":"+ID+",\"title\":\""+title+"\",\"date\":\""+date+"\",\"view\":"+view+",\"digg\":"+digg+",\"comment\":"+comment+",\"author\":\""+author+"\",\"header\":\""+header+"\",\"url\":\""+url+"\",\"authorID\":\""+authorID+"\",\"summary\":\""+summary+"\"}"}else{postJSON=postJSON+",{\"ID\":"+ID+",\"title\":\""+title+"\",\"date\":\""+date+"\",\"view\":"+view+",\"digg\":"+digg+",\"comment\":"+comment+",\"author\":\""+author+"\",\"header\":\""+header+"\",\"url\":\""+url+"\",\"authorID\":\""+authorID+"\",\"summary\":\""+summary+"\"}"}});location.href="http://localhost/handle.aspx?data=["+postJSON+"]";