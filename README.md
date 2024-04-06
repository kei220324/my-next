#  シンプル収支管理アプリ

個人向けの収支管理アプリです。

月々毎に管理することができ、収支を把握することができます。

レスポンシブ対応してるので、スマホからもご確認頂けます.
<img width="1470" alt="スクリーンショット 2024-04-06 14 41 18" src="https://github.com/kei220324/my-next/assets/112589811/8349b82a-45c5-4d70-8a07-5f79fc193c6a">








# 1.概要
URL:https://my-next-lovat.vercel.app/

このアプリは、収入と支出を簡単に記録し、管理することを目的としています。ユーザーは、入力フォームに収支の内容と金額を入力するだけで、一覧に反映されます。また、入力したデータは編集や削除も可能です。 アプリはシンプルなデザインであり、誰でも直感的に操作でき、日々の収支を簡単かつ効率的に管理することができます。さらに、月ごとに収支を管理するため、ユーザーは毎月の収支を分かりやすく確認できます。

# 2.操作説明
### 一覧と金額の入力
①内容と金額を入力すると、その内容が表示されます。
<br>②プルダウンメニューで「+」を選択した場合、その入力は収入一覧に表示されます。
<br>③プルダウンメニューで「-」を選択した場合、その入力は支出一覧に表示されます。
<br>④支出を選択し入力した際、入力された支出データに基づいて円グラフが表示されます。これにより、支出のカテゴリ別割合を直感的に把握できます。
<br>⑤残高計算機能が備わっており、収入と支出を入力すると、残高が自動的に計算されます。
<br>
<br>

<img width="1470" alt="スクリーンショット 2024-03-21 7 43 23" src="https://github.com/kei220324/my-next/assets/112589811/030efbab-e5c0-4941-bf19-daf4c7dc2277">

### 編集、削除機能
①収入一覧と支出一覧をクリックすると、編集ページに遷移することができます。これにより、ユーザーは編集や削除を行いたい特定の収支データにすぐにアクセスできます。
<br>②編集ページでは、変更したい内容と金額を編集し、更新ボタンを押すことで変更が即座に反映されます。編集後のデータに基づいて残高の再計算が行われます。
<br>③削除ボタンを押すと、選択した収支データが削除され、残高も再計算されます。これにより、ユーザーは正確な収支情報を維持できます。
<br>
<br>
<img width="1470" alt="スクリーンショット 2024-03-21 7 43 49" src="https://github.com/kei220324/my-next/assets/112589811/65c26023-2e55-430a-b6f2-3c117bffdb94">
# 3.使用技術
### フロントエンド
Next.js "13.4.9"
<br>
React   "18.2.0"
<br>
Tailwind "3.3.2"
### その他
 Github
# ４.機能一覧
* 収入、支出の表示、編集、削除　（CRUD処理）
* 支出のグラフ表示
* レスポンシブデザイン対応
* 月ごとの収支管理

# 5.最後に 




 









