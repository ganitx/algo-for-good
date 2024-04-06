
// Process HTML sting

/**
 * @function processHTMLString Checks +++++
 * Elements are in correct order
 * Returns HTML tag that can be replaced to make order correct
 * Tags are incorrect order and if there an additional element incorrectly placed/extra
 */

const LOG = console.log;

function processHTMLString(htmlStr) {
    let stack = [];
    let tag = '';
    let flag = false;

    for (let i = 0; i < htmlStr.length; i++) {
        let j = i + 1;

        if (htmlStr[i] === '<' && htmlStr[j] !== '/') {
            while (htmlStr[j] !== '>') {
                tag += htmlStr[j];
                j++;
                i++;
            }
        }
        else if (htmlStr[i] === '>' && !flag) {
            stack.push(tag);
            tag = '';
        }
        
        if (htmlStr[i] === '<' && htmlStr[j] === '/') {
            let k = j + 1;
            let htmlClosingTag = stack.pop();
            
            while (htmlStr[k] !== '>') {
                tag += htmlStr[k];
                k++;
                j++;
                i++;
            }

            if (htmlClosingTag !== tag) {
                return false;
            }

            flag = true;
            tag = '';
        }
    }
    
    return true;
}

const htmlStr = '<div><p>Hello, <b>world!</b><i>Incorrect nesting</p></i></div>'
const testing = processHTMLString(htmlStr);
LOG(!!testing)