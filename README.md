# icons

# 01 cart
<span class="material-icons">
shopping_cart
</span>

# 02 member
<span class="material-icons">
person
</span>

# 03 more
<span class="material-icons">
arrow_right
</span>

# 04 male
<span class="material-icons">
male
</span>

# 05 female
<span class="material-icons">
female
</span>

# 06 menu
<span class="material-icons">
menu
</span>

# 07 left
<span class="material-icons">
chevron_left
</span>

# 08 right
<span class="material-icons">
chevron_right
</span>

# 09 favorite
<span class="material-icons">
favorite_border
</span>

# 10 chat   <!-- 第10號找不到，先用這個擋一下 -->
<span class="material-icons p-4 icons"> chat 
</span>

# 數字直接等於間距的數值，目前已經有套用專題會用到的間距數字，如果有不足的可以再自己於variables.scss修改。

# variables.scss的內容是足的，這裡僅列示
# spacing
  0: 0,                 <!-- 間距0 -->
  4: $spacer * 0.25,    <!-- 間距4 -->
  6: $spacer * 0.375,   <!-- 間距6 -->
  8: $spacer * 0.5,     <!-- 間距8 -->
  24: $spacer * 1.5,    <!-- 間距24 -->
  120: $spacer * 7.5,   <!-- 間距120 -->
  124: $spacer * 7.75,  <!-- 間距124 -->
  140: $spacer * 8.75,  <!-- 間距140 -->
  220: $spacer * 13.75, <!-- 間距220 -->
  240: $spacer * 15,    <!-- 間距240 -->
# font-sizing
  48: $font-size-base * 3,     <!-- 間距48 -->
  40: $font-size-base * 2.5,   <!-- 間距40 -->
  32: $font-size-base * 2,     <!-- 間距32 -->

# color
## 以main取代primary文字
## 以小駝峰式命名

  主色：main
  主色深：mainDark
  主色淺：mainLight
  主色透明：mainTransparent

  次主色：secondary
  次主色深：secondaryDark
  次主色淺：secondaryLight

  配色橘：orange
  配色膚色：skin
  配色藍：blueLight

  灰：深到淺 → 1 ~ 6
  gray1
  gray2
  gray3
  gray4
  gray5
  gray6
  
 <!-- 細節可以比對設計稿跟variables.scss文件 -->
 
  Example:
  bg-mainDark , text-grayDark, border-orange
