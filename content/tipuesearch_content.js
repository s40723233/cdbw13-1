<<<<<<< HEAD
var tipuesearch = {"pages": [{'title': 'About', 'text': '倉儲: https://github.com/mdecourse/cdbw13-1 \n group:1 \n Repository:\xa0 40723201 \xa0 | Site: \xa0 40723201 Repository:\xa0 40723230 \xa0 | Site: \xa0 40723230 Repository:\xa0 40723206 \xa0 | Site: \xa0 40723206 ---- group:2 \n Repository: \xa0 40732331 \xa0 | Site: \xa0 40732331 Repository: \xa0 40723237 \xa0 | Site: \xa0 40723237 Repository: \xa0 40723228 \xa0 | Site: \xa0 40723228 ---- group:3 \n Repository:\xa0 40723227 \xa0 | Site: \xa0 40723227 Repository:\xa0 40739214 \xa0 | Site: \xa0 40739214 Repository:\xa0 40723233 \xa0 | Site: \xa0 40723233 ---- group:4 \n Repository:\xa0 40723245 \xa0 | Site: \xa0 40723245 Repository:\xa0 40723234 \xa0 | Site: \xa0 40723234 Repository:\xa0 40723232 \xa0 | Site: \xa0 40723238 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'group1', 'text': '', 'tags': '', 'url': 'group1.html'}, {'title': '40723201', 'text': '', 'tags': '', 'url': '40723201.html'}, {'title': '40723230', 'text': '', 'tags': '', 'url': '40723230.html'}, {'title': '40723206', 'text': '', 'tags': '', 'url': '40723206.html'}, {'title': 'group2', 'text': '', 'tags': '', 'url': 'group2.html'}, {'title': '40732331', 'text': '', 'tags': '', 'url': '40732331.html'}, {'title': '40723237', 'text': 'Assignment3 \n assignment3 報告 \n \n week11 \n ubuntu設置 \n 下載ubuntu檔案 \n 到喜好設定的網路中新增一個NAT網路 \n 匯入ubuntu \n 去設定中的網路附加在到設定為僅限主機介面卡(host-only) \n 啟動ubuntu \n 密碼為kmol2020 \n 點選activites並且點選show application \n 點選LX terminal \n 輸入xterm& \n 輸入ls顯示資料 \n 輸入cd coppeliasim4_rev4 \n 輸入ls查看資料夾中之資料 \n 先輸入cd CoppeliaSim_Edu_V4_0_0_ubuntu18_04 \n 再輸入./coppeliaSim.sh \n week12 \n ubnutu對外連線(ipv4) \n 設定好埠號 \n 登入ubnutu \n 開啟Lxterminal並且輸入ifconfig並且輸入sudo apt install net-tools \n 輸入ping6 127.0.0.1做測試 \n 進入cd2020pj1資料夾中並且git pull \n 輸入sudo vi wsgi.py並且按下i編輯內容對host編輯設置為10.0.2.4 \n 按下esc且輸入:wq做存取 \n 取出cd2020pj1.leo檔案並用leo開啟 \n 用nav找到allowext7檔案位置並且新增ttt檔案 \n 到tmp輸入sudo vi oauth_scrum.txt \n 輸入python3 wsgi.py \n 進入https://127.0.0.1:18443/alogin進入後門並且輸入admin測試能否可以上傳ttt檔案 \n \n \n', 'tags': '', 'url': '40723237.html'}, {'title': '40723228', 'text': '\n \n ssh更新使用 \n 把上學期的鑰匙資料夾(.ssh) 拉到這學期用的資料夾data->home裡面 \n putty也要拉，更改config的指令，位置在cd2020->.git裡面 \n 把https://github.com/s40723228/cd2020改成\xa0 \xa0 \n git@github.com:s40723228/cd2020.git \n (記得是要填自己的學號) \n 用putty重新抓鑰匙位置(影片裡有) \n 更改start.bat裡的指令 \n 把16，17行前面的#字號拿掉，完成。 \n \n \n API實作 \n API\xa0 先登入學校的信箱@gm那個 進這個網址https://console.developers.google.com 接受許可並創建Google API 啟用(上面那個有藍色+號的選項) 找尋 Google Domain API並啟用它 選擇內部或外部用戶類型並添加新的應用程序名稱 點選左上的google apis，然後往下找到"憑證"選項 建立憑證-->OAuth用戶端 ID-->網頁應用程式-->建立 用記事本把它給的用戶端ID與密存起來 點選剛剛設好的網路用戶端 1 (設置網址) 授權的JavaScript為：https：// localhost：8443 定義URI為：https：// localhost：8443 / login / google / 開啟leo更改其中得config中的scrum為自己命名的txt檔案名稱，並且修改完成之後按下save和darwROC 用小黑窗直接輸入pip install authomatic 網頁開啟https://localhost:8443 成功登入即完成 \n Assignment3 \n 作業連結 https://github.com/s40723228/cd2020/blob/master/downloads/assignment3.pdf \n', 'tags': '', 'url': '40723228.html'}, {'title': 'group3', 'text': '', 'tags': '', 'url': 'group3.html'}, {'title': '40723227', 'text': 'IPv4 Ubuntu對外連線設定操作 \n 操作影片: 操作步驟: 1.點選檔案->喜好設定->網路->新增一個新的NAT網路。 2.編輯NAT網路->點選連接埠轉送->新增4個新的連接埠轉送埠號。 3.設定主機IP為 127.0.0.1 ；客體IP為 10.0.2.4 ；主機連接埠為 22、19999、17443、18443 ；客體連接埠為 22、19999、7443、8443 。 4.點選設定->網路->設定主機網路為NAT Network。 5.設定完後，點選啟動，接著輸入密碼 kmol2020 。 6.開啟LXTermial，輸入 ifconfig ->輸入 sudo apt install net-tools ->輸入密碼 kmol2020 。 7.cd tmp->ls->輸入ping 127.0.0.1測試->cd cd2020pj1->git pull。 8.接著輸入 sudo vi wsgi.py 編輯內容，按 i 進行編輯。 9.將近端的host改為 10.0.2.4 ，接著按 Esc 並輸入 :wq 存儲。 10.開啟leo，並開啟cd2020pj1.leo，點選Nav搜尋 allowExt 。 11.點選fileuploadfrom，並將第10行新增一個ttt檔，完成後存儲並關閉leo。 12.cd..,接著在tmp下新增oauth_scrum.txt，輸入 sudo vi oauth_scrum.txt 。 13.按 i 編輯，內容先隨便輸入，接著按 Esc 並輸入 :wq 存儲。 14.cd cd2020pj1，並輸入 python3 wsgi.py 啟動。 15.網址為 https:/127.0.0.1:18443/alogin 。 16.帳號及密碼都為 admin ，進入後點選fileuploadform，點選要上傳的ttt檔。 17.點選download list檢查檔案是否上傳完成。 18.完成。 \n IPv6 Ubuntu對外連線設定操作 1.設定ipv6及主機網絡nat working 2.開啟ubnutu後開啟Lxtermialermial並且輸入cd /etc 3.按照路徑進入cd apt > cd apt.conf.d 4.pt > cd apt.conf.d 5.輸入sudo vi proxy.conf輸入密碼kmol202011並且以i鍵進入編輯模式 6.輸入Acquire::http::proxy "http://[2001:288:6004:17::53]:3128"; 7.按下esc並且使用:wq來儲存，再用sudo apt update apt update來更新apt 8.ifconfig>sudo apt install net-tools，cd etc/netplan 9.輸入sudo vi 00-installer-config.yaml並且按照影片中的方式更改縮排 10.輸入ping6 2001:288:6004:17::254對外部網路測試是否可以連線 11.新增埠號 12.輸入ifconfig 來查詢在ipv6下的guest 13.輸入sudo vi wsgi.py wsgi.py將近端的host更改成:: 14.輸入python3 wsgi.py 15.用平常開啟近端的方式https://[::1]:18443若要從後門啟動的話加一個/alogin 16.打開leo新增ttt檔案的上傳設定 17.測試是否可以上傳 18.完成 \n Assignment3 \n PDF檔連結 : https://drive.google.com/open?id=1MHOYaFn9Du7UnhU9cJ0GqIthIQQSc4t4 \n', 'tags': '', 'url': '40723227.html'}, {'title': '40739214', 'text': '', 'tags': '', 'url': '40739214.html'}, {'title': '40723233', 'text': 'week11 \n \n virtualbox操作步驟 \n \n \n \n \n \n IPv4設定：Guest IP是透過ifconfig查出來(IPv6的也是) \n \n IPv6設定 \n \n \n \n \n \n \n putty設定 \n \n \n IndustrialAndEngineering \n \n', 'tags': '', 'url': '40723233.html'}, {'title': 'group4', 'text': '', 'tags': '', 'url': 'group4.html'}, {'title': '40723245', 'text': 'Assignment3 \n 報告連結:\xa0 Assignment 3 \n \n', 'tags': '', 'url': '40723245.html'}, {'title': '40723234', 'text': 'IPV4 Ubuntu 對外連線 1.新增整體系統埠號，主機網路為NAT Network 2.啟動，password "kmol2020"，open LXTermmial 3.輸入ifconfig/sudo apt install net-tools，password "kmol2020" 4.輸入ping 127.0.0.1，進入cd2020pj1/git pull 5.sudo vi wsgi.py編輯內容，按i編輯，近端的host 改 為10.0.2.4 6.esc ，"wq" to save，開啟cd2020pj1，.leo，在nav search "allowExt" 7.新增 ttt檔，然後在tmp下sudo vi oauth_scrum.txt 8.輸入內容，輸入python3 wsgi.py 去啟動遠端 9.https:/127.0.0.0.1.1.8443/alogin \n IPV6 ubnutu 對外連線 1.setting ipv6 主機網路為NAT Network 2.start up，open Lxtermialermial input cd /etc 3.進入cd apt / cd apt.conf.d 4.pt / cd apt.conf.d 5.input sudo vi proxy.conf，password "kmol202011"，以i進編輯頁 6.input Acquire::http::proxy "http://[2001:288:6004:17::53]:3128"; 7.esc ，"wq" to save，開啟cd2020pj1，.leo，在nav search "allowExt" 8.ifconfig / sudo apt install net-tools，cd etc/netplan 9.input sudo vi 00-installer-config.yaml 並且更改縮排 10.input ping6 2001:288:6004:17::254 測試外部網路連線狀況 11.Add port number 12.input ifconfig 來查詢在ipv6下的guest 13.input sudo vi wsgi.py wsgi.py將近端的host更改成:: 14.input python3 wsgi.py 15.開啟近端的方式https://[::1]:18443 16.leo 新增ttt檔案的上傳設定 17.test \n 心得: \n 這是一次遠端連線的教學，Ubuntu的使用與學習讓我們知道Linux的易用性，在這一週的抽籤，以這種第一次沒中，第二次中籤這種峰迴路轉的方式，讓我明白，平時準備的重要性，平時沒有準備或準備不足，就會照成今日的手忙腳亂。 \n meeting by 40723210(Ubuntu) \n https://www.youtube.com/watch?v=is_sLTLHV5M&feature=emb_title \n \n', 'tags': '', 'url': '40723234.html'}, {'title': '40723232', 'text': '\n \n \n \n', 'tags': '', 'url': '40723232.html'}]};
=======
<<<<<<< HEAD
var tipuesearch = {"pages": [{'title': 'About', 'text': '倉儲: https://github.com/mdecourse/cdbw13-1 \n group:1 \n Repository:\xa0 40723201 \xa0 | Site: \xa0 40723201 Repository:\xa0 40723230 \xa0 | Site: \xa0 40723230 Repository:\xa0 40723206 \xa0 | Site: \xa0 40723206 ---- group:2 \n Repository: \xa0 40732331 \xa0 | Site: \xa0 40732331 Repository: \xa0 40723237 \xa0 | Site: \xa0 40723237 Repository: \xa0 40723228 \xa0 | Site: \xa0 40723228 ---- group:3 \n Repository:\xa0 40723227 \xa0 | Site: \xa0 40723227 Repository:\xa0 40739214 \xa0 | Site: \xa0 40739214 Repository:\xa0 40723233 \xa0 | Site: \xa0 40723233 ---- group:4 \n Repository:\xa0 40723245 \xa0 | Site: \xa0 40723245 Repository:\xa0 40723234 \xa0 | Site: \xa0 40723234 Repository:\xa0 40723232 \xa0 | Site: \xa0 40723238 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'group1', 'text': '', 'tags': '', 'url': 'group1.html'}, {'title': '40723201', 'text': 'Ubuntu對外連線設定 \n \n 點選檔案 ➜ 喜好設定 ➜ 網路 ➜ 新增NAT網路 \n 編輯NAT網路 ➜ 點選連接埠轉送 ➜ 新增4個新的連接埠轉送埠號 \n \n \n \n \n 主機IP \n 127.0.0.1 \n \n \n 客體IP \n 10.0.2.4 \n \n \n 客體連接埠 \n 22、19999、7443、8443 \n \n \n 主機連接埠 \n 22、19999、17443、18443 \n \n \n \n \n 點選設定 ➜ 網路 ➜ 設定主機網路 「NAT Network」。 \n 啟動➜ 輸入密碼 "\xa0 kmol2020 " 。 \n 開啟LXTermial ➜ 輸入 ifconfig ➜\xa0 輸入 sudo apt install net-tools ➜\xa0 輸入密碼 "\xa0 kmol2020 " 。 \n cd tmp ➜ ls ➜ 輸入 " ping 127.0.0.1 " 測試 ➜ cd cd2020pj1➜ git pull。 \n 輸入 " sudo vi wsgi.py "\xa0 ，按\xa0 i\xa0 進行編輯。 \n 將近端的 host 改為 10.0.2.4 ➜\xa0 按\xa0 Esc\xa0 並輸入 :wq 存儲。 \n 開啟 leo ➜ 開啟 " cd2020pj1.leo " ➜ 點選Nav搜尋 allowExt 。 \n 點選fileuploadfrom ➜ 將第10行新增 ttt 檔。 \n 輸入 " cd.. " ➜ 新增 oauth_scrum.txt ➜ 輸入 sudo vi oauth_scrum.txt 。 \n 按\xa0 i\xa0 編輯 ➜ 內容隨意輸入 ➜ 按\xa0 Esc 並輸入 :wq 存儲。 \n cd cd2020pj1 ➜ 輸入\xa0 python3 wsgi.py\xa0 啟動。 \n 網址： https:/127.0.0.1:18443/alogin 。 \n 帳號： admin、密碼：admin ➜\xa0 點選 fileuploadform ➜ 上傳 ttt 檔 ➜\xa0 點選 download list 。 \n \n', 'tags': '', 'url': '40723201.html'}, {'title': '40723230', 'text': '', 'tags': '', 'url': '40723230.html'}, {'title': '40723206', 'text': '', 'tags': '', 'url': '40723206.html'}, {'title': 'group2', 'text': '', 'tags': '', 'url': 'group2.html'}, {'title': '40732331', 'text': '', 'tags': '', 'url': '40732331.html'}, {'title': '40723237', 'text': 'Assignment3 \n assignment3 報告 \n \n week11 \n ubuntu設置 \n 下載ubuntu檔案 \n 到喜好設定的網路中新增一個NAT網路 \n 匯入ubuntu \n 去設定中的網路附加在到設定為僅限主機介面卡(host-only) \n 啟動ubuntu \n 密碼為kmol2020 \n 點選activites並且點選show application \n 點選LX terminal \n 輸入xterm& \n 輸入ls顯示資料 \n 輸入cd coppeliasim4_rev4 \n 輸入ls查看資料夾中之資料 \n 先輸入cd CoppeliaSim_Edu_V4_0_0_ubuntu18_04 \n 再輸入./coppeliaSim.sh \n week12 \n ubnutu對外連線(ipv4) \n 設定好埠號 \n 登入ubnutu \n 開啟Lxterminal並且輸入ifconfig並且輸入sudo apt install net-tools \n 輸入ping6 127.0.0.1做測試 \n 進入cd2020pj1資料夾中並且git pull \n 輸入sudo vi wsgi.py並且按下i編輯內容對host編輯設置為10.0.2.4 \n 按下esc且輸入:wq做存取 \n 取出cd2020pj1.leo檔案並用leo開啟 \n 用nav找到allowext7檔案位置並且新增ttt檔案 \n 到tmp輸入sudo vi oauth_scrum.txt \n 輸入python3 wsgi.py \n 進入https://127.0.0.1:18443/alogin進入後門並且輸入admin測試能否可以上傳ttt檔案 \n \n', 'tags': '', 'url': '40723237.html'}, {'title': '40723228', 'text': '\n \n ssh更新使用 \n 把上學期的鑰匙資料夾(.ssh) 拉到這學期用的資料夾data->home裡面 \n putty也要拉，更改config的指令，位置在cd2020->.git裡面 \n 把https://github.com/s40723228/cd2020改成\xa0 \xa0 \n git@github.com:s40723228/cd2020.git \n (記得是要填自己的學號) \n 用putty重新抓鑰匙位置(影片裡有) \n 更改start.bat裡的指令 \n 把16，17行前面的#字號拿掉，完成。 \n \n \n API實作 \n API\xa0 先登入學校的信箱@gm那個 進這個網址https://console.developers.google.com 接受許可並創建Google API 啟用(上面那個有藍色+號的選項) 找尋 Google Domain API並啟用它 選擇內部或外部用戶類型並添加新的應用程序名稱 點選左上的google apis，然後往下找到"憑證"選項 建立憑證-->OAuth用戶端 ID-->網頁應用程式-->建立 用記事本把它給的用戶端ID與密存起來 點選剛剛設好的網路用戶端 1 (設置網址) 授權的JavaScript為：https：// localhost：8443 定義URI為：https：// localhost：8443 / login / google / 開啟leo更改其中得config中的scrum為自己命名的txt檔案名稱，並且修改完成之後按下save和darwROC 用小黑窗直接輸入pip install authomatic 網頁開啟https://localhost:8443 成功登入即完成 \n Assignment3 \n 作業連結 https://github.com/s40723228/cd2020/blob/master/downloads/assignment3.pdf \n', 'tags': '', 'url': '40723228.html'}, {'title': 'group3', 'text': '', 'tags': '', 'url': 'group3.html'}, {'title': '40723227', 'text': 'IPv4 Ubuntu對外連線設定操作 \n 操作影片: 操作步驟: 1.點選檔案->喜好設定->網路->新增一個新的NAT網路。 2.編輯NAT網路->點選連接埠轉送->新增4個新的連接埠轉送埠號。 3.設定主機IP為 127.0.0.1 ；客體IP為 10.0.2.4 ；主機連接埠為 22、19999、17443、18443 ；客體連接埠為 22、19999、7443、8443 。 4.點選設定->網路->設定主機網路為NAT Network。 5.設定完後，點選啟動，接著輸入密碼 kmol2020 。 6.開啟LXTermial，輸入 ifconfig ->輸入 sudo apt install net-tools ->輸入密碼 kmol2020 。 7.cd tmp->ls->輸入ping 127.0.0.1測試->cd cd2020pj1->git pull。 8.接著輸入 sudo vi wsgi.py 編輯內容，按 i 進行編輯。 9.將近端的host改為 10.0.2.4 ，接著按 Esc 並輸入 :wq 存儲。 10.開啟leo，並開啟cd2020pj1.leo，點選Nav搜尋 allowExt 。 11.點選fileuploadfrom，並將第10行新增一個ttt檔，完成後存儲並關閉leo。 12.cd..,接著在tmp下新增oauth_scrum.txt，輸入 sudo vi oauth_scrum.txt 。 13.按 i 編輯，內容先隨便輸入，接著按 Esc 並輸入 :wq 存儲。 14.cd cd2020pj1，並輸入 python3 wsgi.py 啟動。 15.網址為 https:/127.0.0.1:18443/alogin 。 16.帳號及密碼都為 admin ，進入後點選fileuploadform，點選要上傳的ttt檔。 17.點選download list檢查檔案是否上傳完成。 18.完成。 \n IPv6 Ubuntu對外連線設定操作 1.設定ipv6及主機網絡nat working 2.開啟ubnutu後開啟Lxtermialermial並且輸入cd /etc 3.按照路徑進入cd apt > cd apt.conf.d 4.pt > cd apt.conf.d 5.輸入sudo vi proxy.conf輸入密碼kmol202011並且以i鍵進入編輯模式 6.輸入Acquire::http::proxy "http://[2001:288:6004:17::53]:3128"; 7.按下esc並且使用:wq來儲存，再用sudo apt update apt update來更新apt 8.ifconfig>sudo apt install net-tools，cd etc/netplan 9.輸入sudo vi 00-installer-config.yaml並且按照影片中的方式更改縮排 10.輸入ping6 2001:288:6004:17::254對外部網路測試是否可以連線 11.新增埠號 12.輸入ifconfig 來查詢在ipv6下的guest 13.輸入sudo vi wsgi.py wsgi.py將近端的host更改成:: 14.輸入python3 wsgi.py 15.用平常開啟近端的方式https://[::1]:18443若要從後門啟動的話加一個/alogin 16.打開leo新增ttt檔案的上傳設定 17.測試是否可以上傳 18.完成 \n Assignment3 \n PDF檔連結 : https://drive.google.com/open?id=1MHOYaFn9Du7UnhU9cJ0GqIthIQQSc4t4 \n', 'tags': '', 'url': '40723227.html'}, {'title': '40739214', 'text': '', 'tags': '', 'url': '40739214.html'}, {'title': '40723233', 'text': '\n', 'tags': '', 'url': '40723233.html'}, {'title': 'group4', 'text': '', 'tags': '', 'url': 'group4.html'}, {'title': '40723245', 'text': 'Assignment3 \n 報告連結:\xa0 Assignment 3 \n \n', 'tags': '', 'url': '40723245.html'}, {'title': '40723234', 'text': 'IPV4 Ubuntu 對外連線 1.新增整體系統埠號，主機網路為NAT Network 2.啟動，password "kmol2020"，open LXTermmial 3.輸入ifconfig/sudo apt install net-tools，password "kmol2020" 4.輸入ping 127.0.0.1，進入cd2020pj1/git pull 5.sudo vi wsgi.py編輯內容，按i編輯，近端的host 改 為10.0.2.4 6.esc ，"wq" to save，開啟cd2020pj1，.leo，在nav search "allowExt" 7.新增 ttt檔，然後在tmp下sudo vi oauth_scrum.txt 8.輸入內容，輸入python3 wsgi.py 去啟動遠端 9.https:/127.0.0.0.1.1.8443/alogin \n IPV6 ubnutu 對外連線 1.setting ipv6 主機網路為NAT Network 2.start up，open Lxtermialermial input cd /etc 3.進入cd apt / cd apt.conf.d 4.pt / cd apt.conf.d 5.input sudo vi proxy.conf，password "kmol202011"，以i進編輯頁 6.input Acquire::http::proxy "http://[2001:288:6004:17::53]:3128"; 7.esc ，"wq" to save，開啟cd2020pj1，.leo，在nav search "allowExt" 8.ifconfig / sudo apt install net-tools，cd etc/netplan 9.input sudo vi 00-installer-config.yaml 並且更改縮排 10.input ping6 2001:288:6004:17::254 測試外部網路連線狀況 11.Add port number 12.input ifconfig 來查詢在ipv6下的guest 13.input sudo vi wsgi.py wsgi.py將近端的host更改成:: 14.input python3 wsgi.py 15.開啟近端的方式https://[::1]:18443 16.leo 新增ttt檔案的上傳設定 17.test \n 心得: \n 這是一次遠端連線的教學，Ubuntu的使用與學習讓我們知道Linux的易用性，在這一週的抽籤，以這種第一次沒中，第二次中籤這種峰迴路轉的方式，讓我明白，平時準備的重要性，平時沒有準備或準備不足，就會照成今日的手忙腳亂。 \n meeting by 40723210(Ubuntu) \n https://www.youtube.com/watch?v=is_sLTLHV5M&feature=emb_title \n \n', 'tags': '', 'url': '40723234.html'}, {'title': '40723232', 'text': 'https://github.com/s40723232/cd2020/tree/master/downloads \n \n Ipv4 ubuntu 對外連線 \n \xa0 \n \n 新增整體系統的埠號，主機網路 \n \n \xa0\xa0\xa0\xa0\xa0  主機連接 \xa0\xa0  客體連接 \n Rule1\xa0\xa0\xa0 22\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 22 \n Rule2\xa0\xa0 19999\xa0\xa0\xa0\xa0\xa0 19999 \n Rule3\xa0\xa0 17433\xa0\xa0\xa0\xa0\xa0\xa0 7443 \n Rule4\xa0\xa0 78443\xa0\xa0\xa0\xa0\xa0\xa0 8443 \n \xa0 \n 2.登入ubnutu，密碼kmol2020 \n 3.開啟Lxterminal > ifconfig > sudo apt install net-tools > 密碼  kmol2020 \n 4.輸入ping6 127.0.0.1 試看看是否能夠通 \n 5.輸入進入cd2020pj1資料夾中並且git pull \n 6.打sudo vi wsgi.py並且按下i編輯內容對host編輯設置為10.0.2.4 \n 7.按下  esc  輸入  :wq  存取 \n 8.到影片中的資料夾位置取出cd2020pj1.leo檔案並且用leo開啟 \n 9.打nav找allowext7 > 新增ttt檔案 \n 10.進入tmp > sudo vi oauth_scrum.txt \n 11.輸入python3 wsgi.py \n 12.進入https://127.0.0.1:18443/alogin進入後門輸入admin看看是否可以上傳ttt檔案 \n \xa0', 'tags': '', 'url': '40723232.html'}]};
=======
var tipuesearch = {"pages": [{'title': 'About', 'text': '倉儲: https://github.com/mdecourse/cdbw13-1 \n group:1 \n Repository:\xa0 40723201 \xa0 | Site: \xa0 40723201 Repository:\xa0 40723230 \xa0 | Site: \xa0 40723230 Repository:\xa0 40723206 \xa0 | Site: \xa0 40723206 ---- group:2 \n Repository: \xa0 40732331 \xa0 | Site: \xa0 40732331 Repository: \xa0 40723237 \xa0 | Site: \xa0 40723237 Repository: \xa0 40723228 \xa0 | Site: \xa0 40723228 ---- group:3 \n Repository:\xa0 40723227 \xa0 | Site: \xa0 40723227 Repository:\xa0 40739214 \xa0 | Site: \xa0 40739214 Repository:\xa0 40723233 \xa0 | Site: \xa0 40723233 ---- group:4 \n Repository:\xa0 40723245 \xa0 | Site: \xa0 40723245 Repository:\xa0 40723234 \xa0 | Site: \xa0 40723234 Repository:\xa0 40723232 \xa0 | Site: \xa0 40723238 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'group1', 'text': '', 'tags': '', 'url': 'group1.html'}, {'title': '40723201', 'text': '', 'tags': '', 'url': '40723201.html'}, {'title': '40723230', 'text': '', 'tags': '', 'url': '40723230.html'}, {'title': '40723206', 'text': '', 'tags': '', 'url': '40723206.html'}, {'title': 'group2', 'text': '', 'tags': '', 'url': 'group2.html'}, {'title': '40732331', 'text': '', 'tags': '', 'url': '40732331.html'}, {'title': '40723237', 'text': 'Assignment3 \n assignment3 報告 \n \n week11 \n ubuntu設置 \n 下載ubuntu檔案 \n 到喜好設定的網路中新增一個NAT網路 \n 匯入ubuntu \n 去設定中的網路附加在到設定為僅限主機介面卡(host-only) \n 啟動ubuntu \n 密碼為kmol2020 \n 點選activites並且點選show application \n 點選LX terminal \n 輸入xterm& \n 輸入ls顯示資料 \n 輸入cd coppeliasim4_rev4 \n 輸入ls查看資料夾中之資料 \n 先輸入cd CoppeliaSim_Edu_V4_0_0_ubuntu18_04 \n 再輸入./coppeliaSim.sh \n week12 \n ubnutu對外連線(ipv4) \n 設定好埠號 \n 登入ubnutu \n 開啟Lxterminal並且輸入ifconfig並且輸入sudo apt install net-tools \n 輸入ping6 127.0.0.1做測試 \n 進入cd2020pj1資料夾中並且git pull \n 輸入sudo vi wsgi.py並且按下i編輯內容對host編輯設置為10.0.2.4 \n 按下esc且輸入:wq做存取 \n 取出cd2020pj1.leo檔案並用leo開啟 \n 用nav找到allowext7檔案位置並且新增ttt檔案 \n 到tmp輸入sudo vi oauth_scrum.txt \n 輸入python3 wsgi.py \n 進入https://127.0.0.1:18443/alogin進入後門並且輸入admin測試能否可以上傳ttt檔案 \n \n', 'tags': '', 'url': '40723237.html'}, {'title': '40723228', 'text': '\n \n ssh更新使用 \n 把上學期的鑰匙資料夾(.ssh) 拉到這學期用的資料夾data->home裡面 \n putty也要拉，更改config的指令，位置在cd2020->.git裡面 \n 把https://github.com/s40723228/cd2020改成\xa0 \xa0 \n git@github.com:s40723228/cd2020.git \n (記得是要填自己的學號) \n 用putty重新抓鑰匙位置(影片裡有) \n 更改start.bat裡的指令 \n 把16，17行前面的#字號拿掉，完成。 \n \n \n API實作 \n API\xa0 先登入學校的信箱@gm那個 進這個網址https://console.developers.google.com 接受許可並創建Google API 啟用(上面那個有藍色+號的選項) 找尋 Google Domain API並啟用它 選擇內部或外部用戶類型並添加新的應用程序名稱 點選左上的google apis，然後往下找到"憑證"選項 建立憑證-->OAuth用戶端 ID-->網頁應用程式-->建立 用記事本把它給的用戶端ID與密存起來 點選剛剛設好的網路用戶端 1 (設置網址) 授權的JavaScript為：https：// localhost：8443 定義URI為：https：// localhost：8443 / login / google / 開啟leo更改其中得config中的scrum為自己命名的txt檔案名稱，並且修改完成之後按下save和darwROC 用小黑窗直接輸入pip install authomatic 網頁開啟https://localhost:8443 成功登入即完成 \n Assignment3 \n 作業連結 https://github.com/s40723228/cd2020/blob/master/downloads/assignment3.pdf \n', 'tags': '', 'url': '40723228.html'}, {'title': 'group3', 'text': '', 'tags': '', 'url': 'group3.html'}, {'title': '40723227', 'text': 'IPv4 Ubuntu對外連線設定操作 \n 操作影片: 操作步驟: 1.點選檔案->喜好設定->網路->新增一個新的NAT網路。 2.編輯NAT網路->點選連接埠轉送->新增4個新的連接埠轉送埠號。 3.設定主機IP為 127.0.0.1 ；客體IP為 10.0.2.4 ；主機連接埠為 22、19999、17443、18443 ；客體連接埠為 22、19999、7443、8443 。 4.點選設定->網路->設定主機網路為NAT Network。 5.設定完後，點選啟動，接著輸入密碼 kmol2020 。 6.開啟LXTermial，輸入 ifconfig ->輸入 sudo apt install net-tools ->輸入密碼 kmol2020 。 7.cd tmp->ls->輸入ping 127.0.0.1測試->cd cd2020pj1->git pull。 8.接著輸入 sudo vi wsgi.py 編輯內容，按 i 進行編輯。 9.將近端的host改為 10.0.2.4 ，接著按 Esc 並輸入 :wq 存儲。 10.開啟leo，並開啟cd2020pj1.leo，點選Nav搜尋 allowExt 。 11.點選fileuploadfrom，並將第10行新增一個ttt檔，完成後存儲並關閉leo。 12.cd..,接著在tmp下新增oauth_scrum.txt，輸入 sudo vi oauth_scrum.txt 。 13.按 i 編輯，內容先隨便輸入，接著按 Esc 並輸入 :wq 存儲。 14.cd cd2020pj1，並輸入 python3 wsgi.py 啟動。 15.網址為 https:/127.0.0.1:18443/alogin 。 16.帳號及密碼都為 admin ，進入後點選fileuploadform，點選要上傳的ttt檔。 17.點選download list檢查檔案是否上傳完成。 18.完成。 \n IPv6 Ubuntu對外連線設定操作 1.設定ipv6及主機網絡nat working 2.開啟ubnutu後開啟Lxtermialermial並且輸入cd /etc 3.按照路徑進入cd apt > cd apt.conf.d 4.pt > cd apt.conf.d 5.輸入sudo vi proxy.conf輸入密碼kmol202011並且以i鍵進入編輯模式 6.輸入Acquire::http::proxy "http://[2001:288:6004:17::53]:3128"; 7.按下esc並且使用:wq來儲存，再用sudo apt update apt update來更新apt 8.ifconfig>sudo apt install net-tools，cd etc/netplan 9.輸入sudo vi 00-installer-config.yaml並且按照影片中的方式更改縮排 10.輸入ping6 2001:288:6004:17::254對外部網路測試是否可以連線 11.新增埠號 12.輸入ifconfig 來查詢在ipv6下的guest 13.輸入sudo vi wsgi.py wsgi.py將近端的host更改成:: 14.輸入python3 wsgi.py 15.用平常開啟近端的方式https://[::1]:18443若要從後門啟動的話加一個/alogin 16.打開leo新增ttt檔案的上傳設定 17.測試是否可以上傳 18.完成 \n Assignment3 \n PDF檔連結 : https://drive.google.com/open?id=1MHOYaFn9Du7UnhU9cJ0GqIthIQQSc4t4 \n', 'tags': '', 'url': '40723227.html'}, {'title': '40739214', 'text': 'gm用戶登入、API連線設定 \n 1. 進入Google API \n 2.點選建立專案，輸入專案名稱，點選建立 \n 3.點選啟用API和服務，並點選Google+ Domains API \n 4.點選啟用，點選憑證及設定同意畫面 \n 5.選擇內部，自訂名稱，儲存 \n 6.建立憑證及OAuth用戶端ID \n 7.選擇網路應用程式 \n 8.將ID及密碼複製到編輯器，命名為oauth_s學號.txt 並存儲在tmp下 \n 9.設定來源及URL，新增URL https://localhost:8443、https://localhost:8443/login/google/ \n 10.開啟leo，並打開cd2020pj1.leo \n 11. git clone cd2020pj1倉儲。 \n 12.將路徑及名稱改為自己設定的 \n 13.完成後存儲，並點選ROC \n 14輸入pip install authomatic \n 15進入pj1，打開wsgi.py，即完成。 \n 影片連結： https://youtu.be/6klM1RR-Iso \n', 'tags': '', 'url': '40739214.html'}, {'title': '40723233', 'text': '\n', 'tags': '', 'url': '40723233.html'}, {'title': 'group4', 'text': '', 'tags': '', 'url': 'group4.html'}, {'title': '40723245', 'text': 'Assignment3 \n 報告連結:\xa0 Assignment 3 \n \n', 'tags': '', 'url': '40723245.html'}, {'title': '40723234', 'text': 'IPV4 Ubuntu 對外連線 1.新增整體系統埠號，主機網路為NAT Network 2.啟動，password "kmol2020"，open LXTermmial 3.輸入ifconfig/sudo apt install net-tools，password "kmol2020" 4.輸入ping 127.0.0.1，進入cd2020pj1/git pull 5.sudo vi wsgi.py編輯內容，按i編輯，近端的host 改 為10.0.2.4 6.esc ，"wq" to save，開啟cd2020pj1，.leo，在nav search "allowExt" 7.新增 ttt檔，然後在tmp下sudo vi oauth_scrum.txt 8.輸入內容，輸入python3 wsgi.py 去啟動遠端 9.https:/127.0.0.0.1.1.8443/alogin \n IPV6 ubnutu 對外連線 1.setting ipv6 主機網路為NAT Network 2.start up，open Lxtermialermial input cd /etc 3.進入cd apt / cd apt.conf.d 4.pt / cd apt.conf.d 5.input sudo vi proxy.conf，password "kmol202011"，以i進編輯頁 6.input Acquire::http::proxy "http://[2001:288:6004:17::53]:3128"; 7.esc ，"wq" to save，開啟cd2020pj1，.leo，在nav search "allowExt" 8.ifconfig / sudo apt install net-tools，cd etc/netplan 9.input sudo vi 00-installer-config.yaml 並且更改縮排 10.input ping6 2001:288:6004:17::254 測試外部網路連線狀況 11.Add port number 12.input ifconfig 來查詢在ipv6下的guest 13.input sudo vi wsgi.py wsgi.py將近端的host更改成:: 14.input python3 wsgi.py 15.開啟近端的方式https://[::1]:18443 16.leo 新增ttt檔案的上傳設定 17.test \n 心得: \n 這是一次遠端連線的教學，Ubuntu的使用與學習讓我們知道Linux的易用性，在這一週的抽籤，以這種第一次沒中，第二次中籤這種峰迴路轉的方式，讓我明白，平時準備的重要性，平時沒有準備或準備不足，就會照成今日的手忙腳亂。 \n meeting by 40723210(Ubuntu) \n https://www.youtube.com/watch?v=is_sLTLHV5M&feature=emb_title \n \n', 'tags': '', 'url': '40723234.html'}, {'title': '40723232', 'text': '\n', 'tags': '', 'url': '40723232.html'}]};
>>>>>>> f86d32466bef9ce46e95d8d8b5a10cec81e024a1
>>>>>>> 7bc48dc7a1766482f1b0959f3ef1b8c3ea5b94b3
