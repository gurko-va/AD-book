# AD-book
Active Directory address book
telephone book based on MS ActiveDirectory

![folder](https://habrastorage.org/files/538/888/1c9/5388881c9346474ba27bcc781cc095aa.png)

## require
+ [node-webkit](http://nwjs.io/)
+ [activedirectory](https://github.com/gheeres/node-activedirectory)

## usage
1. first of all install [node-webkit](http://nwjs.io/)
2. download and unpack last [release](https://github.com/titulus/AD-book/releases)
3. install [node-activedirectory](https://github.com/gheeres/node-activedirectory)
4. add `private.js` into the source folder and [fill](#privatejs) it
5. run `path\to\nw path\to\AD-book`

## convert into exe
1. pack `AD-book` folder into `AD-book.zip` for example `7z a AD-book.zip path\to\AD-book\*`
2. rename `AD-book.zip` into `AD-book.nw` `rename AD-book.zip AD-book.nw`
3. do some magic `copy /b path\to\nw.exe+AD-book.nw AD-book.exe`
4. add all files from `node-webkit` folder to the folder contains `AD-book.exe` except `nw.exe`

your folder must look like

![folder](https://habrastorage.org/files/c55/375/390/c553753903fc416c8ed2ed6c7392d3a0.png)

----
## </a>private.js
```javascript
module.exports = {
	 dn:"ldap://example.com"
	,dc:"dc=example,dc=com"
	,user:"user"
	,pass:"pass"
};
```