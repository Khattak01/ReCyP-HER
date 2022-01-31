
export const isInt = (value) => !isNaN(value) && !hasSpace(value) && !isEmpty(value);

export const hasSpace = str => /\s/.test(str);

export const isEmpty = (str) => (!str || 0 === str.length);
export const arrayContains = (item, arr) => (arr.includes(item));

//return index of the element if find else return -1 
export const findIndex = (arr, ele) => arr.findIndex((arrEle, index) => {
  if (arrEle._id === ele._id) {
    return true
  }
})

//version 2
export const searchIndex = (arr, ele) => arr.findIndex(e => e === ele);

export const time = (date) => date ? Date(date).toLocaleTimeString() : new Date().toLocaleTimeString(); // 11:18:48 AM

export const date = (date) => date ? new Date(date).toLocaleDateString() : new Date().toLocaleDateString(); // 11/16/2015

export const dateTime = (date) => date ? new Date(date).toLocaleString() : new Date().toLocaleString(); // 11/16/2015, 11:18:48 PM

