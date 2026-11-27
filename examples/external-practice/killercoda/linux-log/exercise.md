Set `challenge` to the Linux challenge from Skills Lab. The example below is
safe to practise with and will only pass for that example challenge.

```bash
challenge=sl1:linux:0123456789abcdef0123456789abcdef
```

Turn the hexadecimal characters into a synthetic log. A value below five
represents an error. Work in a new temporary directory.

```bash
if [[ $challenge =~ ^sl1:linux:[0-9a-f]{32}$ ]]; then
  workdir=$(mktemp -d)
  seed=${challenge##*:}
  for ((i = 0; i < ${#seed}; i++)); do
    digit=${seed:i:1}
    if ((16#$digit < 5)); then
      printf 'ERROR record-%02d\n' "$((i + 1))"
    else
      printf 'INFO record-%02d\n' "$((i + 1))"
    fi
  done > "$workdir/app.log"
  cat "$workdir/app.log"
fi
```

Use `awk` to collect line numbers for records whose first field is `ERROR`.
Print the line numbers in order, separated by commas without spaces. Use the
word `none` if there are zero matches. Return the result to Skills Lab.
