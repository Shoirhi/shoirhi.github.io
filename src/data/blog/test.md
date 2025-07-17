---
isDraft: true
title: テスト記事
description: テスト記事です。
publishedDate: 2025-07-17
---

## Markdown構文

### 見出し

```
# h1
## h2
### h3
#### h4
##### h5
###### h6
```

### 改行

行末の2空白->改行

~~~
abc__  （_ は半角空白）
def
~~~

abc  
def

### 段落

空白行->段落

### 文字の装飾

#### イタリック

~~~
*abc*
_abc_
~~~

*abc*

_abc_

#### 太文字

~~~
**abc**
__abc__
~~~

**abc**

__abc__

#### 取り消し

~~~
~~abc~~
~~~

~~abc~~

### リンク

~~~
[名称](リンク)
[Google](https://google.com/)
~~~

[Google](https://google.com/)

### 画像の埋め込み

~~~
![代替テキスト](画像URL) 
~~~

![画像](../../assets/og.jpg)

### テーブル

~~~
| Left align | Right align | Center align |
|:-----------|------------:|:------------:|
| This       | This        | This         |
| column     | column      | column       |
| will       | will        | will         |
| be         | be          | be           |
| left       | right       | center       |
| aligned    | aligned     | aligned      |
~~~

| Left align | Right align | Center align |
|:-----------|------------:|:------------:|
| This       | This        | This         |
| column     | column      | column       |
| will       | will        | will         |
| be         | be          | be           |
| left       | right       | center       |
| aligned    | aligned     | aligned      |

### 水平線

行の先頭から。 [ ] 内はクラス指定。（拡張機能）

~~~
---
___
***
===
___[red-5]
***[blue-1]
---[blue-5]
===[green-3]
~~~

---
___
***

===

___[red-5]

***[blue-1]

---[blue-5]

===[green-3]

### 引用

~~~
> abc
~~~

> abc

### リスト

#### 箇条書きリスト

~~~
* abc
* def
~~~

* abc
* def

#### 番号付きリスト

~~~
1. abc
1. def
~~~

1. abc
1. def

#### チェックリスト

~~~
-[] abc
-[x] def
~~~

-[] abc
-[x] def

### crytus.info拡張

この処理系固有のMarkdown文法の拡張機能です。   


#### クリップボードへのコピー

~~~
 ~~~ clipboard
 内容
 ~~~
~~~

#### 下線・マーカー機能

 [ ] 内はクラス名のため、CSSを変更すれば、様々な装飾が可能。

~~~
___underline___
___underline[ul-5]___
___underline[ul-double-4]___
___underline[ul-dashed-3]___
___underline[ul-dotted-2]___
___underline[marker]___
___underline[marker-2]___
___underline[marker-red-3]___
___underline[marker-pink-3]___
___underline[marker-cyan-4]___
___underline[marker-green-5]___
___underline[marker-orange-5]___
___underline[reverse]___
~~~

___underline___

___underline ul-5[ul-5]___

___underline ul-double-4[ul-double-4]___

___underline ul-dashed-3[ul-dashed-3]___

___underline ul-dotted-2[ul-dotted-2]___

___underline marker[marker]___

___underline marker-2[marker-2]___

___underline marker-red-3[marker-red-3]___

___underline marker-pink-3[marker-pink-3]___

___underline marker-cyan-4[marker-cyan-4]___

___underline marker-green-5[marker-green-5]___

___underline marker-orange-5[marker-orange-5]___

___underline reverse[reverse]___


--------------------------------------------
## crytus.info専用拡張機能

この処理系固有の追加機能です。   
一部にBootstrap5に依存するものがあります。

### 行処理

行の先頭が%%であること。空白が一つでもあると、通常の行として処理される。

#### テキストブロック

同じ内容を複数の場所で使用することが目的。
展開時に内容が{%ref 評価|インラインの展開が行われる%}される。

~~~
%%TEXT
<テキスト内容>
%%TEXTEND
~~~

#### エスケープ

内容は{%ref 評価|インラインの展開が行われる%}されない。

~~~
%% ここは展開されない
~~~

%% ここは展開されない


#### タイトル、説明文

ヘッダーに出力する。使用するHTMLが対応している必要がある。

~~~
%%TITLE タイトル文
%%DESC 説明文
~~~

#### 背景画像

~~~
%%BGIMG <画像>|<表示方法>
~~~

#### ファイル挿入

ファイルの内容も全て通常通り{%ref 評価|インラインの展開が行われる%}される。

~~~
%%INCLUDE <ファイル名>
~~~

#### 画像

~~~
%%IMG <画像のパス>|<サイズw>|<サイズh>|<alt>|<説明>
~~~

#### アラートメッセージ

~~~
%%ALERT <タイプ>|<メッセージ>
~~~

#### フォーム

FORMとFORMENDの位置や存在などチェックはしない。

~~~
%%FORM <名前>|<アクション>
%%FORMEND
~~~

#### 入力

~~~
%%INPUT <タイプ>|<名前>|<値>
~~~

#### ボタン

~~~
%%BUTTON <クラス>|<名前>|<動作>
~~~

#### DIVブロック

BLOCKとBLOCKENDの組み合わせなどのチェックはしない。入れ子も可能。

~~~
%%BLOCK <クラス>|<スタイル>
%%BLOCKEND
~~~

#### マクロ定義

~~~
%%MACRO <名前>|<展開内容>
~~~

#### ファイルダウンロード

~~~
%%DOWNLOAD <ファイル>|<表示名>
~~~

#### 目次

この宣言以降の、#で始まる見出しを目次として、この場所に出力する

~~~
%%%TOC 目次見出し
~~~

#### 参考文献・引用

引用の情報をこの場所に出力する。

引用の出力

~~~
%%REF
~~~

#### YouTubeの参照

~~~
%%YOUTUBE https://youtu.be/C43pTFyLPDw|説明文|400
~~~

%%YOUTUBE https://youtu.be/C43pTFyLPDw|説明文|400

### インライン

行中に存在するものを全て変換する。行をまたいでの処理はしない。

#### 整形済みテキスト

~~~
 `<内容>`
~~~

 `<内容>`

#### 画像

~~~
{%img $1|$2|$3|$4|$5%}
~~~

| パラメータ | 内容 |
| ---------- | ---- |
| $1 | 画像のパス |
| $2 | サイズ幅 |
| $3 | サイズ高さ |
| $4 | alt |
| $5 | 説明 |

#### アイコン

Bootstrap5を前提とした機能。

~~~
{%icon $1|$2%}
~~~

| パラメータ | 内容 |
| ---------- | ---- |
| $1 | アイコン番号 |
| $2 | サイズなど |

#### バッジ

Bootstrap5を前提とした機能。

~~~
{%badge $1|$2%}
~~~

| パラメータ | 内容 |
| ---------- | ---- |
| $1 | バッヂの種類 |
| $2 | 内容 |

#### ボタン

~~~
{%button $1|$2|$3%}
~~~

| パラメータ | 内容 |
| ---------- | ---- |
| $1 | クラス |
| $2 | 名前 |
| $3 | 動作 |

#### ブロックテキスト展開

~~~
{%text $1|$2…%}
~~~

| パラメータ | 内容 |
| ---------- | ---- |
| $1 | 名前 |
| $2… | パラメータ |

#### マクロ展開

~~~
{%<マクロ名> <パラメータ>%}
~~~

#### アンカー設定・参照

~~~
%%ANCHOR test

[アンカーへ](#test)

~~~

%%ANCHOR test

[アンカーへ](#test)


#### 参考文献・引用

引用場所での定義

~~~
{%ref $1|$2%}
~~~

| パラメータ | 内容 |
| ---------- | ---- |
| $1 | 単語 |
| $2 | 引用内容・文献など |


%%REF 脚注
