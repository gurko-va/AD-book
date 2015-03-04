# AD-book
Active Directory address book

![folder](https://habrastorage.org/files/538/888/1c9/5388881c9346474ba27bcc781cc095aa.png)

## require
+ [node-webkit](http://nwjs.io/)
+ [node-activedirectory](https://github.com/gheeres/node-activedirectory)

## usage
1. First of all install [node-webkit](http://nwjs.io/)
2. Download and unpack last [release](https://github.com/gurko-va/AD-book)
3. Install [node-activedirectory](https://github.com/gheeres/node-activedirectory)
4. Add `private.js` into the source folder and [fill](#privatejs) it
5. Run `path\to\nw path\to\AD-book`

## convert into exe
1. Pack `AD-book` folder into `AD-book.zip` for example `7z a AD-book.zip path\to\AD-book\*`
2. Rename `AD-book.zip` into `AD-book.nw` `rename AD-book.zip AD-book.nw`
3. Do some magic `copy /b path\to\nw.exe+AD-book.nw AD-book.exe`
4. Add all files from `node-webkit` folder to the folder contains `AD-book.exe` except `nw.exe`

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