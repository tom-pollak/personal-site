---
tags: blog vim
title: A better vim delete
---

I find vim's default delete keybindings can be a bit unintuitive. Many times
I've incidentally overwritten my copy register when running a `dib` or `daw`. I rarely
wish to keep the deleted text after a change command, and never need the deleted
character when using `x`.

I've changed my keybindings to the following:

```lua
vim.keymap.set({"n", "v"}, "s", "d")
vim.keymap.set("n", "ss", "dd")
vim.keymap.set("n", "S", "D")

vim.keymap.set({"n", "v"}, "d", '"_d')
vim.keymap.set({"n", "v"}, "c", '"_c')
vim.keymap.set("n", "x", '"_x')

vim.keymap.set("n", "D", '"_D')
vim.keymap.set("n", "C", '"_C')
```

No command saves the deleted text by default. Instead I introduce `s` that
deletes with copy, just like `d` used to.

(Can't live without `S`? `cc` does the same thing).
