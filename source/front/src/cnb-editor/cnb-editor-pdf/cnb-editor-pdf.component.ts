// Imports core
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'cnb-editor-pdf',
    styleUrls: ['./cnb-editor-pdf.component.css'],
    templateUrl: './cnb-editor-pdf.component.html'
})

export class CnbEditorPdfComponent implements OnInit {

	pdfTest = "JVBERi0xLjQKJcfsj6IKNSAwIG9iago8PC9MZW5ndGggNiAwIFIvRmlsdGVyIC9GbGF0ZURlY29kZT4+CnN0cmVhbQp4nK1UTW8UMQwFjvkVOSaHNbFj5+OKhJAqkCjMDXGAbbui6gJtBRX\/kp+EM9PZ+agWJEBzGdnP9nt+Sa5tgJBsaN\/4s92bp2+y3d2aYHfm2mCClFLuc\/P\/7d4+6xRaLAaokpLtLgwOMEsFIiuwUIbM2XZ746zvLs3zzpwaTQYie6fwE53ywiAWARKLkWIEsntDNQqkKXJl3s5QUYksUUNkhaoV4hLVR5YoLrRCDZElSpKsUEOkR+lWAnPTUwpD1I1ElDAwDBEh1UOkxwvkzE1\/UP3aEaHiUvt9ZJrxZx9QCypUkjg3AplB+9pcI9QaeyMeHYzQNow59U5cGpIgA1cSArQMKBTZUmpusr05VyIDqMxBXHgEKcZe\/D1ZqUBclGwCbboiS1kEVIJOVjFpNXmk91vQP9JD3WVgm0uFgDTR20Q9VroqqzWJpNjuzLjHLUN6NQhFadSCjH3iyaQo6C6xPxypHl34Q9ADRUSqWmOqWi9jOtLoIej\/rYbUOWzOIUiYHbMj7wNKhqLHEpvhtcHfuVd+Q1CKoLhvXkCUW3K3LZhKSeQ+eQahVKPb+k0CzJX1TdkgcGQRd+719mQq2X0+VO\/8JmaImnc3rUZ3WdwHr68TIbH73seq5HnzRfWYHuY0C9zHVo4V3Y8hzbGMaSzkXvpNAMEUksyaXvnYuuZF1WsfFcqM7kvjLsgj94jkzlojpU6xjjIjkaN+S5y1FUxTcYqWNWBd9tMnZaVLc3ce1YWqTOd\/uQLXee3VQcZRQfq65ey+zigvJen7KHgvSSTFOfcJOXm08++7k+GSnJpfoT5VJmVuZHN0cmVhbQplbmRvYmoKNiAwIG9iago2MTEKZW5kb2JqCjQgMCBvYmoKPDwvVHlwZS9QYWdlL01lZGlhQm94IFswIDAgNTk1LjI4IDg0MS44OV0KL1JvdGF0ZSAwL1BhcmVudCAzIDAgUgovUmVzb3VyY2VzPDwvUHJvY1NldFsvUERGIC9UZXh0XQovRXh0R1N0YXRlIDE3IDAgUgovRm9udCAxOCAwIFIKPj4KL0Fubm90c1sxMCAwIFIKMTMgMCBSCjE0IDAgUgoxNSAwIFIKMTYgMCBSXS9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKMyAwIG9iago8PCAvVHlwZSAvUGFnZXMgL0tpZHMgWwo0IDAgUgpdIC9Db3VudCAxCj4+CmVuZG9iagoxIDAgb2JqCjw8L1R5cGUgL0NhdGFsb2cgL1BhZ2VzIDMgMCBSCi9NZXRhZGF0YSAyMyAwIFIKPj4KZW5kb2JqCjcgMCBvYmoKPDwvVHlwZS9FeHRHU3RhdGUKL09QTSAxPj5lbmRvYmoKMTAgMCBvYmoKPDwvVHlwZS9Bbm5vdAovUmVjdCBbMTQ0LjIzMyA3OTEuMjUzIDE1MC43OSA3OTYuNzMzXQovQm9yZGVyIFswIDAgMF0KL0E8PC9VUkkodGV4dGVkaXQ6Ly8vdG1wL2xpbHlwb25kLzVhOTIwYjc1OGEzODAvNWE5MjBiNzU4YTM4MC5scDoxOjE2OjE3KQovUy9VUkk+PgovU3VidHlwZS9MaW5rPj5lbmRvYmoKMTMgMCBvYmoKPDwvVHlwZS9Bbm5vdAovUmVjdCBbMTU5LjI0OCA3OTMuNzQ0IDE2NS44MDQgNzk5LjIyNF0KL0JvcmRlciBbMCAwIDBdCi9BPDwvVVJJKHRleHRlZGl0Oi8vL3RtcC9saWx5cG9uZC81YTkyMGI3NThhMzgwLzVhOTIwYjc1OGEzODAubHA6MToxOToyMCkKL1MvVVJJPj4KL1N1YnR5cGUvTGluaz4+ZW5kb2JqCjE0IDAgb2JqCjw8L1R5cGUvQW5ub3QKL1JlY3QgWzExNC4yMDQgNzg2LjI3MiAxMjAuNzYgNzkxLjc1Ml0KL0JvcmRlciBbMCAwIDBdCi9BPDwvVVJJKHRleHRlZGl0Oi8vL3RtcC9saWx5cG9uZC81YTkyMGI3NThhMzgwLzVhOTIwYjc1OGEzODAubHA6MToxMDoxMSkKL1MvVVJJPj4KL1N1YnR5cGUvTGluaz4+ZW5kb2JqCjE1IDAgb2JqCjw8L1R5cGUvQW5ub3QKL1JlY3QgWzEyOS4yMTggNzg4Ljc2MyAxMzUuNzc1IDc5NC4yNDJdCi9Cb3JkZXIgWzAgMCAwXQovQTw8L1VSSSh0ZXh0ZWRpdDovLy90bXAvbGlseXBvbmQvNWE5MjBiNzU4YTM4MC81YTkyMGI3NThhMzgwLmxwOjE6MTM6MTQpCi9TL1VSST4+Ci9TdWJ0eXBlL0xpbms+PmVuZG9iagoxNiAwIG9iago8PC9UeXBlL0Fubm90Ci9SZWN0IFsxNTcuODMzIDE3LjAzNzkgNDM3LjQ0MyAyNy4yNDI3XQovQm9yZGVyIFswIDAgMF0KL0E8PC9VUkkoaHR0cDovL2xpbHlwb25kLm9yZy8pCi9TL1VSST4+Ci9TdWJ0eXBlL0xpbms+PmVuZG9iagoxNyAwIG9iago8PC9SNwo3IDAgUj4+CmVuZG9iagoxOCAwIG9iago8PC9SOAo4IDAgUi9SMTEKMTEgMCBSPj4KZW5kb2JqCjggMCBvYmoKPDwvQmFzZUZvbnQvTFdGTFdKK0NlbnR1cnlTY2hMLVJvbWEvRm9udERlc2NyaXB0b3IgOSAwIFIvVHlwZS9Gb250Ci9GaXJzdENoYXIgMzIvTGFzdENoYXIgMjA4L1dpZHRoc1sKMjc4IDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMjc4IDAKMCA1NTYgNTU2IDAgMCAwIDAgMCA1NTYgMCAwIDAgMCAwIDAgMAowIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCA2NjcgOTQ0IDAgMAo2NjcgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAKMCA1NTYgNTU2IDQ0NCA1NzQgNTAwIDAgNTM3IDAgMzE1IDAgMCAzMTUgMCA2MTEgNTAwCjU3NCAwIDQ0NCA0NjMgMCA2MTEgNTM3IDc3OCAwIDUzNyAwIDAgMCAwIDAgMAowIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwCjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAKMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMAowIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwCjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAKMTAwMF0KL0VuY29kaW5nIDIxIDAgUi9TdWJ0eXBlL1R5cGUxPj4KZW5kb2JqCjIxIDAgb2JqCjw8L1R5cGUvRW5jb2RpbmcvQmFzZUVuY29kaW5nL1dpbkFuc2lFbmNvZGluZy9EaWZmZXJlbmNlc1sKMjA4L2VtZGFzaF0+PgplbmRvYmoKMTEgMCBvYmoKPDwvQmFzZUZvbnQvSUFFV1FCK0VtbWVudGFsZXItMjAvRm9udERlc2NyaXB0b3IgMTIgMCBSL1R5cGUvRm9udAovRmlyc3RDaGFyIDAvTGFzdENoYXIgMi9XaWR0aHNbCjMyOSA2NDEgNDI0XQovRW5jb2RpbmcgMjIgMCBSL1N1YnR5cGUvVHlwZTE+PgplbmRvYmoKMjIgMCBvYmoKPDwvVHlwZS9FbmNvZGluZy9CYXNlRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nL0RpZmZlcmVuY2VzWwowL25vdGVoZWFkcy5zMi9jbGVmcy5HL3RpbWVzaWcuQzQ0XT4+CmVuZG9iago5IDAgb2JqCjw8L1R5cGUvRm9udERlc2NyaXB0b3IvRm9udE5hbWUvTFdGTFdKK0NlbnR1cnlTY2hMLVJvbWEvRm9udEJCb3hbMCAtMjA2IDEwMDAgNzM3XS9GbGFncyA0Ci9Bc2NlbnQgNzM3Ci9DYXBIZWlnaHQgNzIyCi9EZXNjZW50IC0yMDYKL0l0YWxpY0FuZ2xlIDAKL1N0ZW1WIDE1MAovTWlzc2luZ1dpZHRoIDUwMAovWEhlaWdodCA0OTUKL0NoYXJTZXQoL0wvTS9QL2EvYi9jL2QvZS9laWdodC9lbWRhc2gvZy9pL2wvbi9vL29uZS9wL3BlcmlvZC9yL3Mvc3BhY2UvdHdvL3Uvdi93L3kpL0ZvbnRGaWxlMyAxOSAwIFI+PgplbmRvYmoKMTkgMCBvYmoKPDwvRmlsdGVyL0ZsYXRlRGVjb2RlCi9TdWJ0eXBlL1R5cGUxQy9MZW5ndGggODMzOT4+c3RyZWFtCnicvXoJWJTl+vcgvu88zoukjmiavoNmlnbyhJaVW+WuiIIiIo3sMOwwLAKyw7DerMM+LIPs67APOK6IJIqZWpqZ1qk8lVbneDrVM\/bQd33PoORW\/9O5vuv\/XXgNXM\/7Ps99P\/f++41GgokTBEZGRlPXeQSEhgVH7nLz2vbSzkB\/F8PiQv0zRvo5E\/RzjYG4\/hJ9N4wBE2Mwmdg7hx2Yhk9Pxcqn8P4pAmMjowhl8brAoMhgb5lXqPkLu3fuWfTii395sGLxxhtvmLtGjj8xX+8R4i0LMF9I\/9jv4RcY5E+FrzRfR9\/28\/N2M5f5RQZ5hZi7uLt7uBu22bn4efiab\/T28w4KCtxv\/sK6ReZLX37Z4iX68ep9vc2p4oGBfq6Bgb7m28wNFwgY+xAIBLMDAoOCQ8L2h7u4bot0s3L3sJZ5+72+xOLCUnOBYIfAWmAj2CWwFdgJ9gjsBWsF6wQvCRwE6wVLBBsEGwUWgs2CrQIrwSzBU4JpgnSBWGAkeIZaTGAseFawSlAu6BZ8JPg\/RjuMnIwyjO5OMJ0wb8LyCa0TPphw23ircY6x1vj9iUETYyYOTrzE2DC2CaZ3oF1vovUa9lJP++kWDrolnoOlek8z8TlHkbjVSWSaEK3VL9Eatf2Ig380xrn6MDNnkfNEF5HpCHFsxy8O6CdpAwfo5p9v4cgfxaZ4n2HzV+TteHBuB6YjT+EsgVErcGPc4hWWfKoMl7THs1vjld0S6Ab8HNNq0xk6DAijz3\/Gz0rEdq4ibNJi5iYy3TKmWKI6RT1NbI4dDMdecBeZSqO1uA2vcuubNjSEU8+I7fWz9XIzLwiQMeJ+D5HY3lNkeid6eJ9Wz9DN0\/51C\/vdEkv1LyvMvOiFvEXiOYCHGHGrj8i0Plqtt1Ib4cN4shlhcQWTlpdeAHmovCSvhy9tJ\/GyfLYTShNLvRF+a3ShBvB8\/G+m\/r2Ghk5AOe1EKitlNZVxoRKIT41KiUamuIqeuLrdSN+Hzcx8RaaHok84vqufoZ3Wd+ftv+O9t8Stent8xWyjSNyzSSS23Sx66ZrZFpG4YKvhVa1+4THsaND581s47kfxdbz5bpiZ+DvyFjWl5r4pR2cJgcxO2RprjTrhyMdMz25d8Blqvae+\/hkvwAteu0NMJNvBc7\/HTkQPENWbXeldS2aSaa7r1q6SfoifkuBZ2g8\/4U2xBejuIp0RfhZPNL47G9ebvUrtQVyP6P+pNsr+tzE+gcVm\/tQJ0cP6OWPe33TbWD8TP29mKTLVb7y\/mR\/Qp9P9uPuupxkpklay1wtSXCQQAKNiBsic8IAXU5EUd+qEf8kJbwQ8B4F+O078dSF1fMjdhTDaAgGMc2LqCj5Siq\/rItkViTlaCTSCPggamd6C3Ot8hY7ksMRytIkxHYkecNfqpw\/cs5H2Rxx9S7xdP0Vhtk0k1lqJiAhjs+2GeB3A27V4jdZI74HDzHaIMrVm1qKxC+N6HT5N1Z6DJ+Jm\/JQxzsSXzTDD\/h10yu7KS23dI3ANPvIa2tLqrrYq2giI\/CCteHCnIKqtS2LKmLY3dXKqbW6vpFGI0yeuMNjOqQcv\/lwv0LqenFb9qc17tl9hp6\/9L4p3C7D9ZTMbkfhLwU6R+KZgl0j8TbytyFkvMKNLu0WJo3Zmdoa1PSJTsud+zONZGE27g9H8W+IF2NUQ+qf2isSvS\/U3zRzuvXb3GYMV8IRb4pexsyFOLuwbC6K7k7XTej7dexUXX7b\/RHxVL9LPNrvSozkC59DXr50nQmK6dAWZwINzmWODX3l4WXx7hNOBiISwSCS+6e4b9g7Yw+763b2+XYED0SNwGc6oezq0HXXDMAynwo65tqPw8sgij3Jk3mW2osmrE4bQ2ePaa1ePOazlYU+49853UBJhzT4KanGHLWjlNvtFS2yPf8nDleb+j9uRKYmOofk2FxubmVNtgfpC+Z0xvnLX1szb9a9+f01Hzl8Kh3JSrWnJeO6etVfyW6V6c50tawdhOUmFCiUAnER6CyEcyTqcewmZ6mOx67ARVk\/c\/kv0sJAeeks\/ojU6dh5XY8ZYn4X9zJwgwZ6JtUxSWFGPhrIXPqiuGjn61cUuTXVTS19ZPxxGmPnLDTKDiBe9MW9bi\/Phjtradh5qY6rDCjzL0jOhBFSF1aXltU29FTq4AUft4TV422vz68uQtdXq1xiZS2Sokw0K1O8R0guahqv1nmocr7ZTs\/2i21yv+K7ndL3SLNNE1JNToDw4aGJySNVWpFSbTBacNdRtMS3pb9Aiby1wEngKOgU6wXnBd0ZCI0+jCiPdhJcnNBk\/bbzJWDNx0UT5RNXEoxO\/YuYyFkwmU8UMsVasSsgK09A0FI460fVJ5pNembRnktOkyElHJ70\/aVQ0X7RHFCDqE50TXRP9wplw07mXuCruNHfN5DmTbJNek68mL568ebLj5IDJismXTdeabjMtMW02\/dBU\/5T3U3em+ExRTWmd0j\/l9tTpUy2mWk7dN9V3atrUoqnlU\/unnp16feo\/pgmnmU9bOu3qtO\/Fk8ULxJZiD3GiuFA8Iv5puun056evmB40vWr68ekXzczM3jALNztt9ssMkxn8DNsZ+2cMzPhppufMipnnZ3739NSnNz\/t8HTh09VPj87666x9s9Jn\/TLbbrbP7PzZ559Z\/szWZ6TPJDwz\/Mw\/5xjNmTRn9pz1c5zmJMzJnlM759Jc0VzvuYNzf+Jn8hv5XP59\/gv+Z8lUyesSP0mKpNp8jvmb5v7myeZV5hfNf5739Lwl81bO2zrPc17EvIx5FfM+nvfPeaPzF81fNd9ufsj8pPlF82vna+d\/+uzTzy6mjdvbqyGwTdPQoGkLbPCWcAehGW9iMnMhl\/aH2siK4JCIyBAekiElMxlxN4d7h+Ei4k77dDl4Bsq9eU5WH9rD50AhZGUiLpvNzUpLloCLt3SzFHH6zE9GM1nOBciB0U+Y8D2piuioqIjAuCBAqVJcoQtndwdVdkqgOLs0rwy1fokrYIDMZvKisxSQgqKCEzx5Fyk+q4th90J8fugg4jBDOkgoMFxvc+0ROAYjbmdtamVle\/OtgT6MEHaVFh3nu9lD0KmoimkPq3SGXWiRgweZznO6sFon2ALbwqTuEX5RLoptgFxYe0X+SQnnAW7WzPrj7qrNsBhWum9aYfmm\/2uwAIgvnkeW4L2AX4F\/3arGq5A0n0mwi5NF+rtutPRaAeQF2PADYF\/AjOqjttPNg2c0I3ARznh2WqJKH5V79RrUx3IBwrH0jqDFlL0J75eeaLpzahCzgBcDnrsXG\/31tK3m7TLC0qS9RFvLJ4YyHCDk9iryjkj0pcIjSuVR\/jiL37y0hMhJ6FYL8qqEG\/3+Dwq2\/hdWjdVOwMRuCLUKCfBz2xnxGqAtrD8E5yUWKPIy8qAK4Xy1cBhqk9X76+SFvlnWSIevS9mURW7ufwEUgiNYbYFygMr8ErSJbYGt8ppdKgukZamh3LczW487la+FVWAVts3+hZX7FgJ5Bp5rWj609cyGr12\/hc\/g3bpz51CHRS8ADmJgADLzlAWFVTkDgFS6sRt+pkyxlYBzkltcSLCDpfdWsIStrd5HPU9GXYKface8jDksAWqha2\/0kFcMgoE6\/UFPutdBaU96vINelZb+ZhTiQL6kGjiMP67UkRt\/1ORu6CJ+OxCHMlyjkG75hFfryGdS9e9sCZfiz2j0rrzXF++9Pibh+rj\/DApcYWBZmluCf8ROV38bcAH38v318aVJaihGBblKJZ\/NlqcWZBQBaq9v7un1a3KycbFfL4F3Djq0+7cG6GKG4UsYadQM1nUXDcN3iANc+19fRowRnoTXknymLCQnCRJQVITCgfeT4tv0LVuIUQZoEUnB\/8KL8CLm8LHhxtOAdGRYWis8VJm4XwIx4QEBAYhzYhM2hWyS+\/i52xjCyeXRcAJ95kNOuP5HkfkFyxFXaS17DKqTKoLR6Go64c19fHSaS08TMpx+5+g\/aADpyxi6pG78Nodq1SkV3k5VU8POReS8kFsKbwZu37VmvSMRAGER8caLyHK8B9vjF\/By7IO9yAv4dWLLc+dh0K\/dtsO6xAqIKf0Xu91zh2yXrf96WA+2TbJBj+G404CnIMAmJcMdpzuGTjRcMZSTAuGhvNyT\/Aj77yMO8xbYO8yTcENsF3THHYxsDFXJlFtQrj1TTJiOfddos+w6mY1NqGVSN8b5B0EoJJQfuICizjJhX7v3rlbjBeoLQ3AHYfbFc2QVT\/7xsJHkEMhwTwR3g5DDQULozswuzM\/PU2ZqAQ2w\/+h3eVkC9rHu8v3B+x1j36F6eoLbDkbab1mzHshMWPYakKlAjAZ24+c90O0Q5nKEMr0qqim0zAfcwS3axz\/IJ8An3hbeBrtq6XEX3X5d9FXkDDmkswv632fO2w6GfwH4ebj1OeDZcGb\/CffOoDr38pVqZF7PLK126aID0sVTh\/9G69wp\/+6dja4VLiX2hhwd\/RaiSbMWGOXRgs6ilroPD3e+D6i1ND6YDjkl43Egl+Jv6Ui5cjx9S5ja0qJWfhiOeNfuUHkWOufvHEv43\/W6XAgrU3wjvHyttspWwCawrvPpD+pIqYFvqPO+fCg5PpGWP8jDG7CRybbL960MPLTlS09MI4qBj9sOX2o5VHwCbiKOLNDbMmkF6UWQi1RFuS18v45oaCL3Ql5qsRfCfr9KtIBf0Cfj5aPJPYDX6z9jirpyi4vKympqi1spQtKRdGk+O9RwwEsCCekxqfGImIwuJrx+K5NcmZEFSijIKyjIKcpRZnYBKtORXmk12wOlivwQVLea4egUvIUZvNJQeWLsaQMtY4er4oIo3EpTxEchIiAWZBa2ZRSFqYVUycLC7E6+U0fO0FsegeKUah+E95JOspyEMe67XEPsx\/prhy6YdQuuaJJASV5ZoYoCT7yKpoiMyY\/LjYckiErN2JaBAg0RF8dagiLb+wi1xSpcwyQVpxWAEpUU59Xz7+rIZelBVguqxGpPagtyG8jrjzlzRdI9NIPX0zJykDnYVVKpUlVXtZRQ2+TrSAe97MnqWF8JRCcfiA9H3KgCwklePzAteGVXF40yhGfA6Eu\/ikGmb4IK3CwFJmbJgb0BsmCf3RFbaV9cAfq\/3hUz3NLtLtthPdrR6n6ko6FOowmqcecjM5j0jAw6LadCWjbkgbal7+JRWi3PxrcE1PjUOZRa0gMmvm63zqM6RNNcXWUwSEppQmmyMiMbsqGqp+IwNIMmoSy6MkoZAo7IXTg\/0jfJIQJxr\/q6SGEbrD+170u4AGcatMcQV2ZfG64D1K9rbFSm5KZIUiE1Q5EWlZyakQQoMKHyqISDHWkxB+SIC\/bcF+wMjuDdCv3QW9XUV9Vc2lX4cQnifNd5B+wBtHLvh7Q6Tz5y\/XJTXUyUBNLS01KToyJSE+AA8qkN1WjqGrrPbz6+lMxYYk4Wkfl\/W4Sn8DfhWI\/2J1qf1ipBGwnM7qTCsxK4a8RwxJ4C6HeBaVdSAE32Cz2POVfb0MszrxIjsoDM\/3QhRpKzoK1vOY24Hujyr9hX7K90gXcQQfveXLfB+T1szMO7ef0lbeV9HY09tLhk4sXLf6JVE5HpLxJjspiYf\/UX\/IzkNryv67mNvCoZ1zUu\/psplvI8KO+LbErSZJ6kpm\/OOVjYUHW6pfEwoOFuu5UBiUm+Es42My0zTqnISSmCImiqLzmfdTtLldWqOl3fdhzeg+7E2sBWVF5RkJdPh8\/stKz4nJCy2FpAteqq+jbqaYkvRCbsc0GcS4Nv4V4gHKzeAs+DdYv98RDEbY4O9AdbcFLLdVGIswrz9wVXtOWqJ56NV3524kcejoZ2e6rouJND8S53VuO0ZrWH1NLKXXflWmf\/eQn3KQ0dVTriulNrw8AX7dzqQya+9k5tPw+tFQcP19LUsKLWPfwb06N8iOnJa0\/9jen5gYGjyv6i6qr+floM66ApWhWuClP6gwMC8uq9TVvHN1mO00MWDHyQVhHZFnx4b+MOOg85+DtupiKtqchj4yJJ0rhIhQwXtyvuiewWcr5yua9fXVBza11di6RFXufLc2QP3Tl0fyf5WggrUjxiAhLCQ6L3QwzE59GSlJOZlVOYW5RF\/0a1IQcDfUPk3g79Puf5QThW29jd3Fd4jFbKP33vU8NDmCMrmRxFNgULKDY+1YePkOHydnZXbnix63FE5mO7\/j5m6JT24Pv5qJ2UyZqFLarkWFrlFHFRUfcFHaHh+5igx277KOP2wCiP6fNvBo4Y\/IC4RzyxX+lH4x3I8v\/sCftGa+qJvf5OW6hupi\/SHDInc78lE7AJNvkWT8A8nvsiNiYiCXexay15msxyX7dunfsH+Gk8p\/PiFQmH+VexgEzgrcBV7rUDcRe6N5JJxMx17fr10stYiKf0X\/lIwpEN9Do9j19nTC91e8RvehUycKX0o9pTNYNtzb25MVG0RkQg3+rQlvba+p7D3i12\/DawtfddhjhZg6x4LywDGxt4BdxLfA6GV++vTjgdg07EMdciGsLBDaSuPtYU2u8YCPknciM2GlbTw\/T4HIo6Ct\/DuWH4Bvpi2gKrQ6rC87eXoL1FjG0xQGRhWGFsFRyE7s7Gk9AJzbENQYg7GFYUXrYPaVgOO7gKE8gMpy0rkpH7DZIvhA1ZwYWhZS7doUPQBW3F1QdbW2iDO0nzTJlRSCelNAv5Pgc6KYUXK8qTS9NqoR3hOvy8ls49W2lpCwbGNqlghAKBH5hHM4E8JYSdyT7RPvud3OQO4Afyolh1bGV6IdDiQ9bRNzvH3\/QTgn1OqCq03vVw6GlaZA7V940gbhEuZNKUGblQgCoKclv5mnYSKitnm6E4qSAAFciXkZjFOIdJV95jSYvymviKdhIkq2AboDCx1A3hxaPmGqAw5QI2JReaAZvrGebgu+XlGkDKdmJDD9OMDT4JadEpcbRWs3gWU9NQW1oHqKCduMkq2SZVUgx9roiOjULb3lrzPZOsTDVIKynJbTZwsgkytiOtJLHVBVERS4iQAuNAH5+IAEDJMixrj2ZDKSRXZCflJBcC7dbZBbm56LM7Hy1klAl5saBAsdEpHobUyaWp4wXyUrmG2mYCvXhqQbqSDhEVxco2vqqdJMqK2BaoiKmgt3ptlDngxcjelNr5QiIocqirsjKzM3OyC7IKIB\/VhVUGeAXLZU5dPsf5E9Bf1z3Q3Kvu7sPGdK7FGqZ2uErdCSjPQBiXsZ1l8XKDAWIVB6jkXyGRrO4GpuDv7e03AH0BpG50Ju33s0CJN7kBk\/CCh6cFoOcA1+lnMpxXYKCX9z1iok0zRkyMZvxqPwD6jLv2DDc8ZPGFzSkmoSg5Jxnoj+EjsST8BhG9TkRxEZAAybkphhqXl1NYhLo6Ge7mmTHiYpy3eJi1+I208HHc5EA1NcfmTHBtYl4UhEN0NP2IKYxWJSC8bDFDmyZe9h2jKixUQSlURpVFQDQkJAcHI24bHbvJinbAk+9gk4W0PHHJAWFhoYZim+OtQpxtbVJWKDiAh3usFU0XZX25qtpwRkplIuKOhRSn1sEp6NMqzyJuN35vQMil7PDwsqLDh4cm5TSSxbJvnLa6fn34zHW+VMgFhYYGBVWH1jVUH2yoD60OknC7HR132\/Y7nhjs7xsccOy3lXBtjQHessBAmXdAo6atsVEj4coSr3\/PlKhyiw08X1xJNE296APRtJ\/ee1CWW\/T4g7OAp+IVMiCTFxKTOzJ6qV+3SItYDRRllCdXKUojIQxiUqKSohGBUWvG2zo8wktB0VyMLl64R65qlkBxbllBBbqEZ+AkALJwfHCMkOqvG3gKZzrobQjdHuJ\/n6fwepynKPhjniJ2nKeoYa\/Cu7FNoS3yGhvVUgN6IJ6ALfGnjLI0JyePzqBZaeF0KrNKiz0gD\/VxDXMFJ\/DTwGHoUDd1HWxQNeffKKVTS1NOdWG9+nTr\/all1b2p5UHlSXL5H3qwITK+Z1QFD0dGfHJIyFhAzWOCaxLyoh8OqEQaUIuYRzwpMbiS53Kz83JysjsbVMUl5TUtpd3QgY75aZy9g0P9fGrCu3k6G9HeTcM2JystRQLOvs7Wnug\/oWH+ARz+\/TBw\/Z0wCIOosQcPB5fEEF0GJelPzn+rpCwkSg7e4N4UQDdAk6qnF0VVMQHy\/fFhVFikGmqgsbKuPr8wWwn1mX\/QdSX32y7\/yNxjGHuoj0n4OJs+Rrf9Hc6Xnmj65+ApLAS8kILKPVhoMbRb89ZjdJsBJhosB1IKxjbryGYczI7xbidYvGaMdwuzXEqWSzaxY6wcFxZsHbkDkM+7Qk1mho+EJAjpCelpaSkpMel+gJy9cL7Gg8ZyTFZKbloOZEIjwulCaMyszzmEuJTMZEgDFJ2oiIvLV5RK6jLLqLlQf03ATmt\/H1uZc2WZhFamrJysOpUyHypRdURFSEB4qI\/1kMuNb84euczDCd+uXaqszMxMoMPsobL6dtCikT09K960cdklr4yoqykvq+ahNLkgujA1Oz0LslFpR1mLtjr4nd1hckeeW75p8\/JX39v02Wfvnf\/8c8vzr0u4oz3OdrtdXfbYO2tPnOjVDtDI9yPt4Ik3AATBASYsNd2Bj\/fCuzSsTSaFW9UIyqH+KkD3GgC8lE5NANkUdxE3spr+uBEXvJq8iR2xN4WdK7AM03W8irhJxvngCIeUhP9XPnj063EeZbRZOM6gfKvzuceg6BuEYwXiEIvfAK1HA3nTQMc+oE4f7PlfZU1JkpC8khFwCPAChEXS7lXrnBxtvOr8ulqaq1p46JOnQAnKLVQWFx92tOSBmNZsHaF1Y2Hs7leATIJXgjJDqQfimlIv0KEpm5h02d6Aa3Cy38CQ4nlVh\/GaTEQUQu4JAhArhHhNRpUjkAXUL+xJx2v8kzxVUAZ8AXjS7i8WUlw6UlNzhtZ8NHKov7SkQJHCwwF5ATgh3+b9Ld21LW1Dzv1rV0kdiBFVc0HAPvJKJsJJQu4JTpIbLD3yKYzQo8iE82QmrAfHEKkjcjvtCXGkRAtMybGK3sae7lOahg8BHfnKa9lqrzctJIvsvme5oYxPbWARsnhrowXPjYqFTxBj+mbhk4TvanKT3AT9UqavMPtRXR6KjDHLJNAjDlEYsWCHI3mdp+o\/of3jO+7bkqPGHHA2dDHCnnL8Pc7vcVsOAp6JRnT9JaV5KUk8xITkUEz6sC35VVInwkq4A\/KcfAmou+NhEDWElAd4+oZ6ru2Rfcb\/DLWnKjsRTtEfYBrfPal5giBKTk46gAhPOmi1\/4BJLkopeIIgUqWpvRBOHF3ttJwJdQqW2dGSQSL+nF1pXK21lie8RZPhna5+CQ570lq0+L3+zR5szl+G1vLTR+iwO5n96ZjDgnkODs9KLFnb5NxDEu7e2Y9S6uNmfphN53D4PQl1OnLzd\/zxA3sBzhR1qd9r1QzBR3DNbWR9m1ulVGlhIGy7WeK7YQF54cUX3z\/FQ82ZMPgQ9corHH29gnyIKe0ZU\/FqvBfPw0uwLw8\/+H9m+dGm6yu7FsNmCEpdvwe5vesB0aS3D5jqq6quytbOkaN1F2kUn\/Fq3tVoX74texki3SxnVyG8lBAYJCEaYVBSrB0fKWO5emjo5bvYG9AuK7BAdM7lEvGa0WUAMiUwI0UKNwk5IXwCpnK\/vU\/f9gZmXwZdxCeE9UXFAxRxjCop4vggSyaX7KUAPsPCd2tiREKEHJANHabXPBimueTErGIJ5GTlZitbzmX+Ha6jT\/OKdPzf2LasBG8JaRMGyZPcee6Ex5FV23yC3IMrw1vq1EW1PAe1Uel0sOfy87NUtZoAVx421uwZiabFJ3H3LngLnGLiZLQzH1Cn9hlqz5ouGRV37XD71e9KSjArIYyQC8z13MRHemGlJpLdlNvRIMGMELMlsYsl3JrDsrGK05591ZAkTgfCw0AGMcXQB1d2Dy4soDmiqjkOF1CPppEqo8pPT5JAUlQWBKNgdXxdS6WariqUqRSuQEl\/IvSilsCS4AB5uOPGS1ZYhI0+GP6G1s8DFKsm5yblxmYhrlDZWgPn4Itth5bBXgiLkwWigHYvOnqu0gBTdqigUl1d21hd1AZosN3VaV+42xsSt3d6aY0ukSnZcwY\/QSAJIjaA\/ZnuIuUIT9FcEX30hy6EWhyEbYD4PMkmUEfSI87xSpb73zsZTxP+qdPwDCGeWRC0RMKtP+r7iFfiwsdKVwlox73yfoH6MFxDPd2N6oqclFQe4iOUEIhCauJqqU\/qOmX1lqu83LfxCwJiiTHPfZhlkNku\/GM120cv\/o+6tQu7c5Qf0Gof8FtglxkCu5DtBUOidfzOng7hWM4V0pwrG8shmoTs7TuKt99eHTVPomADU\/Mo5pGN5+rxB7mKC1n89nuD1z7dfYgkSQKxMVuf0HCJ5hvLvRnSUSqBMm0CdKNauZrGmr\/Xhg+240l4yt++x\/PxoiU\/kxk8t3Tzns1udYEaTW11qwTKUwujKlPz0g1sclldaRO8D7pNyvmITLfHZqxigcO6t2mO9tIh6Tum7DfoSGEAhY5yCh2Tx5CeFUV6yeNI78YnZ+4hvbH\/7vX\/kdF5wOfUsyPQlNqUpIuujQMXcA3b7x7rlxCQsg3QuHH\/ZJzcDxMIr8yEGORCRDsz+QYZc7rz816a0ly9ousCX6EhSq8K9oLCnfpKICRGB6q\/+S8F0Ezgxhrz7ww58oyMLzLwJLuxxrz+yH9KgDK8\/OIneDpchxGvno0V\/pU7c+0Rp\/q4v+ccoOMnnN6ScF0+9dtWeTjYLTkQSqchLnXMh5bUh6njPvzkxul7PgwMoxjvIMV4NRSth1TLJZw8hK7U0JWDdCWsOvDRFYlhiSaDgiVpeMYL+JXxnoV9Cf1N9vLkFXjupVCyCumSmMITxe0VTT0XRjTXAeEXLpoTioOiyPINK8l0WAGWGtcLkU0Rp1KOIS56taPrVkB77Pqu0On+CEtW\/rD55v3Inr\/8ezKFXwr2rs7zUFc00\/JBW+NxQJ8ctSKTJI9cQWK4A8+lPxuz09v24e9RvQZjT6b\/SIfyVWzWv0sH2wbvfZN67+vXtt2lNlnPUuxDWA+rzbTjepxJwSwdRILZXMx1Dl+kVbvLMpcgxD3KjVgCmTJGrJiMEyuPs4O\/zw0i7nfYQcBDf4YftAIybUym6bjM\/wtqGNGeCmVuZHN0cmVhbQplbmRvYmoKMTIgMCBvYmoKPDwvVHlwZS9Gb250RGVzY3JpcHRvci9Gb250TmFtZS9JQUVXUUIrRW1tZW50YWxlci0yMC9Gb250QkJveFswIC02MzUgNjQ1IDExOTRdL0ZsYWdzIDQKL0FzY2VudCAxMTk0Ci9DYXBIZWlnaHQgMTE5NAovRGVzY2VudCAtNjM1Ci9JdGFsaWNBbmdsZSAwCi9TdGVtViA5NgovTWlzc2luZ1dpZHRoIDUwMAovQ2hhclNldCgvY2xlZnMuRy9ub3RlaGVhZHMuczIvdGltZXNpZy5DNDQpL0ZvbnRGaWxlMyAyMCAwIFI+PgplbmRvYmoKMjAgMCBvYmoKPDwvRmlsdGVyL0ZsYXRlRGVjb2RlCi9TdWJ0eXBlL1R5cGUxQy9MZW5ndGggNTgzNj4+c3RyZWFtCnicpTgHeBRl2knI7H4woYZQRGdzd2JBRQ\/x7hQLJ2Ao0kukCKZseiO7m7JJYLN1Zt\/tLdnsJtmQkAJRAgGkRVC6nIcKdsVT0V8f9by737uJDv7\/\/85shET013tu50my+d7e329iY+LjYmJjY0fNKyxUFqnTCpSld824Rzy5pX9KbP+Ncf03DYPvRn8z+cb4HRQkDIOE+MPfHhzXv3Fsf+ro\/hVjYmQi+azY+bFLYtfGPhVbsConV5WcVVykTsa\/mbkqdWluukatzEzWFGUqS5PVOcrklCWrk1OURcrStILkZZr0gtyM5MdzM5RFKuX05D+qktOSVSXKjFwEKisylCXq3OKiO5Nzs5IrizXJGaXKNLUSUTKLMzSiwsnlObkZOckalVKFvAdE35mcVpSZrCxMR7FXD5OLS1GHtAK1shSPS4pLRcaq5OKsQSi5RepiScXv2d85CJhZjDKKitXJ6ZXJuWqVsiArOSMNBUsEpUqVpkCdW5R9TTNkla5MzigukwQi0c\/YPiQCi5WZuZpCdW6hUpWbPX3OzJkZBcos1fQUlK\/MUaZlqqarZsTExAyLi42JibXGQqxNCmTMzTFtcVPilvIR6Ouf1xfb18cf6xvWN6H\/5v6uKzfL+q6UJ\/XP449dmScfxa8SQm18I3\/nybZxwN\/E38r\/urItsZ8X2pN6unb2KsAJTqur+oNHz82EFHisfMO6dU9o5wI+4blHnji07uWy80ASv37r63c+8xqdJoUZzCxnrHhg2bxZQH5lfI2nFPAcPEfxlOfiP5nD8KymI8tsM4MFqfpnjhjVf9d3o\/ef4tdd3D\/OfkHPZ9x2Oucwv3Bf2oXXXk38x7H+BL4hSfty5Stl5z\/jYz\/g44H\/DfDUYv6+ue+zDha54I+V5e5KWSXEgiAnkGpLdad6FzY+3rRYGC5MESYKSSDMA2EjP1WYzS+DHdDp6HSRxM9mOwpshVAAldYKa6XptiV33wHrIG375j1+i58LADm6f\/\/R4+mHVi9bs3G5EPvhvXyMgh8Bl\/gYD59ga7I1QxM8wz3DPrPd2xZoCb92vPsteAP4ybfw44W7gVjAbEUT\/3JFmVTDj9bwchVP\/qV7aQb8Fh7bODdFhS6bfWUiX5UE\/Mx\/8qP+xY8ML29YFlw+Vb38PrgX5vXMeecphxUfqAN\/AAIEXJzL7Fq5s\/QQPAsnDxx727tdoLcJI4JCYomlhCsGgsYm8fH8FAX\/4bf2pMQPj4XWOlWwCoRxC26ZNa3yTOUpeA34uBf\/9tfDZJTA8J2xwL83jC\/hmaR0yKjOLttQvHIdzIHFx4qOw17obdgVOdRx\/AhcgLNrOlcCGcU6+OY2fiFst8mEW0D+0Yhu+nAi\/954vjqpOWFEi7+xwdXY1PFxQkJDvctZnzAypldMRUXMQzGNMb0xR2Jejfkw5l8x38UGYt+P\/e+40XHT4+bHrYsriNsSx8W1x+2O+1PcxbhP4v532MPDNg8zDXstfnx8Svzy+E3x2ng2\/qX4N6lYaho1n1pH1VFd1HHqPeor2e9k82VO2UXZd\/Jb5I\/LN8qr5Q75Wfk7ZAKZT7TEQ14g\/xj+++E5w4PDnxl+bvinI+4bYRjxHJ1Ar6aLaAvdTh+n\/5KwKCEn4ULC5wnfjJw7cvPIPSPPjfxg1IhRk0ZljDKMOjHqvVFfjp4w2jD6jdGXR\/9jDD3mpjFTx9w15pExZWOeHvP2mL+PVYxdMLZsrH3s4bEfjxs77uFxVeM6xl1MHJeYk1id6E3ck3gi8U+JFxO\/GP\/weN\/49vHHkiYk3Z70YNITSR1JPUkHkv42IWHC+gneCa9M+HLi8IkLJ3onXpp046S7Jz046dFJqyZxk05P+mjypMnrJtdP3j752ckXJn8ymb9hxA1TbthwQ\/MNn06ZMmXmlMVTdFM6p5x3O51uBX+j3G1xmhiBl5ksFpNCuFFuclrcDC1B+9UD0AlR6BX1ABT4GQfDlNfh8oCXnJYH9D4dw2FdcVaSr8P0PBgSgd7rgVuBn0r5Db7aWr2+lgFhxh8KpBM9nhiiJ09qKdrAmo1gIEvlOp8+wNjBAXYboXcGQJj5ZJUENvwIuA6EqVStV+\/3+3x+SclLO6Qjn97P+L0+v4K+1IUsqP9I\/2yq3u3yMmHYqemo8lg8bvCA3Wqz2te+WvBe3rtWB2tnxRbDWVmS90DB\/WvnmvT+Wp+rI7SjJQzE6zZvUYCg\/nHDRRuyqS0ms4HRQn5LccjoNJrACJzNauP65u64v\/sBG+vgHGiy025zkO53d7zX96rbV+vXm4urCjRaIAaTq16BFqqvM97WHenCXgbBXMiDZevTNirZFmsLtJCAnLYtAB0FGquG1WzcvX4fnILu4NOd2PoihbY8gqSNXV1IGhBJVzy1cVPWACmd1VXY09PV1dNT2JWVVViYxdB57SXd3e3t3d0l7Xl5JSV5DK1prGxpaWxsaals1GgqKzUMHd5Sr2W0W7ZoFQOZNiaaafMGEm3MQKJtLMlUKvK2px1h6NzmTXv37T37IgPeSsDoF5QVa5jNWzqbFPSVHL6oP0dGv3li2cMbK55a+\/CKU28eaNrfp6D5i1L8dHq9jhEuSvkS8PkCmBy1bK3RUF66oShLlaXaUFCgt2DztUAZlIWhFfxOv8dLmtsOdfa09rQe3LHD57ThVIMIRLSgIvRsWFqzOjtPU5G9VWmqMFdCBTzRozkEr8Ophud3dbc076rbTdxNzkZs+c9lRzYAoY+pTlWe060uWZuTng6ntz5XcYDQYHSYnObepe3z4R5QsWqLClirmGvVDfowYP7ZXR5y7vLnr\/KyZ+qddV4IkmCNv5qxyoSbzELC0ftOWhw4NkAL1QaoJnRNoDbI+MDrcnn7Pnjn5S97\/E6vDwJQr6vbAsJwmHbgsRNmp9luAlIBW8v92l2LWubjfCkxlsBmQvN9Mp\/H48MBbsUcI8Lt\/CqKdVrsOKDBzLEWPBFWURxrxfQmeo\/Rx9A84afxcmEaRfNhvWxVSs2iRSnBFxh6ufy+NxZdvvz6uQ+Yk3Kf0aNnhD6Z3mjUY0zCabLHF2WmpCza8yIyWDCNslvFGnZE65hf8AXlcjhd4Aa3xWVGNfCAs4k1hTUoVqGAJGbWYgYToPdcLKGFWx8SbnmLv+UtLG2T3YJHfJ+wmooWCpFs4lehGt4BNQyoBrg5p8i9j19NRUuWSPoJq+R6j8HHSM7w+hT0j55K7NAqWog5RoWf3d91GA7DvsLwJvTibfxoyumwu8AFTg51yDi8vH0xLIZlJRnrOZYTVxCz3exEJW8TRqOSTquYWg6bw46W3PgF9XRv37ajcBSOqJ\/OIEPE83H8yKbPPhNGNgpxDD3YLiFOGFlx1138yEoeIcKETZQjaGsAfKwNbBD55n0uOZEDPRiN+Av\/sXH+Il8R7jMF+qLaIis2LOCiYR1oqTwSuR1OtxQKt8mBtk14lmJrrNWAj63aUYMneXdg\/BAdfODx4C\/8x2qv7awVm8cOf6e\/04aNCuxEctdAHxWQyMRaTFIETW6MID\/59oFwSY+d8JO\/FJ3oRCe6OKcFA4UH0ThJD4cHt1MWlhPz32y3oDtp8a8D3ZqPWepgRbcOir2YgvkDKQgu1skiyzwxwR0Wm2Vw7NF+Pj9aCDRk55Spq8tqNDUl2BrKg9gadj0d2dYQCbYE28VuUCN2gzkpKx5dcTDr+QvnT1w88WTP6h\/mTP4PcyZ5CaVrNEUAO6g7EmjE8DwihcfOoUfMZoulqKRKCZmQGVJ2ljixCtzoX4ddDAkiDqkOmk8+QwUq3WWgAY2pTFeJJ7OlkHB2RHK5nM7O9tBu2AN7qnYXtVuwYEyYBSwnhgERzSwrFZJDKiQjGC2ckazB4gErdiIrGeIPwDEHNrIGS4bz4GjCtuYBj9PuIcfwCGw2ETrE1YBzC7kcQ4Z2I05LpPjzB563mPJKUxGUQIm7qLmSPHSf588KOpq8ohwmGh9VZMsO2Ak763e0RhwOB6YCuZbqDB0tA1EKEw18a1mwAPIhv6ZAVcZKiUGuFQ12mol3SMUmDU+x2PiJn2OKOcQ6dbEuMcXwgLVbpF4jXhHw4A5MMVbqfw6xYgel+9DU+snEvlZ4Q1PsJ0vs5aWf\/A6nQamlVK9e+unM94GPJ0PXsVk\/2MaGbHKzfrDINUDQXKcnNpkHToUU0Gw\/rPds9VW7qoHM1y+arxAY+Xzfoj8z2ClcdT6fhzsEERKCU0YcMlv1NWbEyyuOdHZ2RLoV1zFzDGJWO8DMP4gZ++PMFCI3hg56Q84Q1kCjMbSVCM\/JcZY5xQ\/D83IIWxusdZbuHH8hTrcqS43eYLZlgJbUwHoPju9ma0+tWyzgEcCP5bOFETagAvYDYcUQCE15zG6j0WQyMt\/lyI1uk8fjcnsY4LWDSWgIWTsNLiI88hngNHvoLgT4bLuCikHnr1Kid0XXMlfelFwreh053TsIn\/42R+6pdRiNOtbI\/A8KDLAej9+B+n4TkbuxXoxGpP8uIjdhJXg8SE\/3yYOBQJDhJ8iCAV2NYq28RqerERfuGl0AGfbKpXXlv2UBn16nyJBLi8xvZDq9LxDdnBg+VeZ2YsDT5JJyQirGH9OBNvpYn8+Lsvlz8iGIf5BfA7UO7PfaKNG+AUytLJpSrXKPwaHX69GaPwxlj0yvggb0mBplXziAOPU6PTj5EMSFg\/TIH9BjfpSoawBz\/oAe+deELRzKHple00MbTtsUqiJtpVRY27kLZ5+4xuBMhcvrzuSe6jocOR46Q+i6\/fUHcLieVvUthQ1QUlBeqMrWZuGl91eH7++dm7lpQ072elKSlb8BlkFqV8beGh\/bechoz6wv3A1HIOwMu0OdF1\/ZffAEobuXH1kGM2FDZVpN9opq5Tr1+q2lxlIoBo1T4y9vytydfgLIHtjW0riN0C3t4XY4AE1sMzQR3Hg4ZraMBQOao2+0NEMzuHDDdIXZoLle7zceeWmrt6JO5SvkSOPh9qNwFs0otZSZNVsWahcWr1Ge3\/Au\/I2crDtyCotB4yzzl2OnBRtwJqsZx94FGW2rsFdABdHLDazBaoBH4YnzcBHq7EFXIFjf7G21mystWihDvq9mHCk51LCtrsPfTujwkaYX4CwcruhdD1mgKa1SVRTVFMIm+P2ehTtXFGQri4uURFNYqkTnpbfmd+s8XOsukz3fr9qJMyboqHPVbzt5fGcPbrftT+5ZD\/MgqzpPV7S8OjUFvy\/bv\/I07gWNTQ049Bpb6iOAceIaIERwcnDMUvSICSeSMWgJQQiknTvIBcx+o8\/Uts\/h8bVscFVYSXB3y344gpqXs1WWSl3qllRNWsHzynPwLjno7z3EiHv1Uz4rZwYLrn8n0RfVtircj41yE\/rHiIHNeB5vOH6b3+kL+MPeJpulmt2CzYVuqA\/W+wJen9Mjtmcr9u00c35I3Ya+Bas0FcwsmZ1FFdekZ5erDXqLEVgiaORW9D7TV0qJaDZc5jxOn6vOEwo01Pu8fQdqXWRdG\/A3UXXmOku9dZ+5edt2vDrV+TsiEEQxOBxyLaXBymbCyTiUYeHI0kKqxqjTV2\/dWltcBjVEmB+V0VuOzSYEzc3BgNe9p8fgJJnNwMdSz5Z3RDowy8rAmE49BLPcD9fj6phqXgNrQG1T2dWEfj3wuusNACEuT4hZfA\/hiTCDH87PoOgFvCyHTwJ+EoETzhc8xwkd0gcqm3BUV4Cuscon\/a2s0hNhujzkCzSKEFi7VLhfq+KkuQdiZ0Wr7XaHs3H7h\/xa2EN23vNKPk7FKoDFIfQl1XK0VIWdtu80f3+41S5NP\/CY3EbxfRxeLSo33yeshUyS\/8m8nTgbQwBnq5A1pUlta1XQVU31vu6eJRkMLL69DcOH494lbkS4Wj7ffq4N43486\/QGRqWqRBmsKPTxEFB2myimDU6q\/Xg3wjXPALUw60FBX5pzvd7bd3\/Nt8N50ivEvaxkUGLdVYnbr5PYKkk8s4ExyehQ+RZ9XvaZXgbOflmKWYXbqllcsHCfXl2yqBQeICt7lh5iWlsb0RCnaNmLVUBx0jWvFJZvq20gNO6qXvDDO2\/z+rZnrnfOZuVvhHZIIRl87GO7GZS49arEzddJVEkSlxxi3LJf6DfRbb\/Y4qiPOw78la+GY6Qn+bySMQ9EmRIXfQdshxNqX5WdtZnBCAseEHI1BWa857osetOWakzlX+gx0WG\/2Naod4s33ipUwxqSxcek7GZcA1lEiRcbFjbDim36EOewusADL73L57bscHlYt9npc9fjXkNomxWASd+7omk5EIHCGyURyFcP8ZTiJJxo2ruXYHe1uSrtRoUedFZc0YuUZelArLLfzvn0o48ufPqxwibbC7vLOoucloDVB8TTaHdhxu9ob4dO4mODeuYBmZ6twevHPVGKTxT\/Been2+\/l7k2ZfjfWlBB\/64OCXJB\/9SAfr+Dj4e9vW3m5jZdPfVuIR3DxNk1HR0tLR4empbhYrSnG3c7nb8BhQlfrddXY6mmoCFQ3YJneKH+kYfG7cAkunX33DUwvsXsxe9NPVJwEwlNfvYWXdnLrWwKlWA4rKtLTCbY2q7mR8yh8ELDhfaFzT2QvkI8vTL\/33jnTf6tIh8xIUafFqbPpgRgrOTNa5RFfLWf0rt62Ep1Fpk0TnfXFNJ4ojsPz23p7XS676OagLlCDSWDizObCwnTtU0Bm\/PHi5cuvXbys2A97tV2FeLPhEA0CATEC3wMvX3x0xoxHH52hoAez5snnX4i\/7\/hCIKiB0W52mXszXlAfh6GglbBKnZFhNnNi\/tUEdEFUxG13ubq69oX3A7nK\/ClICxd24XXIjmig04mpWRbWRiLhcCSiDZcxZVptmYIWv4rfRBAjwhS0tH6djq5m\/Xuju9nS6G5Ghx1l5Tqf2ev1ugIK\/lu551L9X+B9CNS69dh99EZrDakRcEpQ5WyZlrmyV6ZlI80BvctgMJh1CuFbuc6LxD5XoNkRCUfZKWxWirZt9Zl8YuO9tPV9wyWCnAMGJNKbdb+M0RCdmf9IZ+ZnRP2Uij9H90M1\/j1qycCWoUHRDBg4BMYMhTVFKOz\/UucStzJyYRaF1\/Dog7dkUlFGcdIrLxwYNlwn57xD4c06+uCVHK+EciERSezS2ws7fggv5\/FEeu0B0kWcCOIJokjvLzj84AlScdI7F5Bu\/hhaFvlzx1P7Vh1cYuccV\/kdPNP3wvGjdmmcEXCgkvaVR9e+8OSZ7xmimtyTS9auWpnKSXOF0N4rC35ZsNAbQ9wO\/LcU7e1fQFn8eo8OiA5qjZZaQl+XLwragDKctX5TAALgczv9hDb0LxDp\/724XVVVuPn\/x+Rv\/hFVB6c1IgxR88fU+TkhUduuLJDrvQaf+NaG+WaX\/N\/n8JNp\/LPUQ3JzwMVGycUe0cWDM\/l7e7\/HFtbKhrhjrYyeM+QEbwXf47Rch9NyFefkrygbZ7M6wAsen8NNTn5NOVw2N7ikdLaR5f+krNJubACjnjWR5b+mWLPVBGYpla2Ebu2m7I5oSWG2suQTIUnkKNUUDm6OqPMoXGukmsKcd5B7+CSRpVRUuG+IRTVeWEjZ2ejbGtxBHIQfzy+kRKCkBT5EEE84BzvwvobDTVykEiVImuBDaLv4VsoW8oadjdAIYUvIIBHjeHa7PQo+SR5Z49JqU81ljJAkvSFgaP4xudPisFhY1sIIj8ktDtbpdDqcUQCLAMsAwIkAhwiIqv1jQlwDQlIHCXGJQpqeMzeLEHHNY\/CixuIPVDoqcMKaTEYF4pX3uZoQDxodTYAP23RN5+YnzBUVa13l13T+P7beuoYKZW5kc3RyZWFtCmVuZG9iagoyMyAwIG9iago8PC9UeXBlL01ldGFkYXRhCi9TdWJ0eXBlL1hNTC9MZW5ndGggMTMzMT4+c3RyZWFtCjw\/eHBhY2tldCBiZWdpbj0n77u\/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjw\/YWRvYmUteGFwLWZpbHRlcnMgZXNjPSJDUkxGIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nIHg6eG1wdGs9J1hNUCB0b29sa2l0IDIuOS4xLTEzLCBmcmFtZXdvcmsgMS42Jz4KPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJyB4bWxuczppWD0naHR0cDovL25zLmFkb2JlLmNvbS9pWC8xLjAvJz4KPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9J3V1aWQ6NTJmYjBjYzYtNTFlNC0xMWYzLTAwMDAtZTgzODA3NzEzN2ExJyB4bWxuczpwZGY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8nIHBkZjpQcm9kdWNlcj0nR1BMIEdob3N0c2NyaXB0IDkuMTgnLz4KPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9J3V1aWQ6NTJmYjBjYzYtNTFlNC0xMWYzLTAwMDAtZTgzODA3NzEzN2ExJyB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPjx4bXA6TW9kaWZ5RGF0ZT4yMDE4LTAyLTI1VDAxOjA0OjA1WjwveG1wOk1vZGlmeURhdGU+Cjx4bXA6Q3JlYXRlRGF0ZT4yMDE4LTAyLTI1VDAxOjA0OjA1WjwveG1wOkNyZWF0ZURhdGU+Cjx4bXA6Q3JlYXRvclRvb2w+TGlseVBvbmQgMi4xOC4yPC94bXA6Q3JlYXRvclRvb2w+PC9yZGY6RGVzY3JpcHRpb24+CjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSd1dWlkOjUyZmIwY2M2LTUxZTQtMTFmMy0wMDAwLWU4MzgwNzcxMzdhMScgeG1sbnM6eGFwTU09J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8nIHhhcE1NOkRvY3VtZW50SUQ9J3V1aWQ6NTJmYjBjYzYtNTFlNC0xMWYzLTAwMDAtZTgzODA3NzEzN2ExJy8+CjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSd1dWlkOjUyZmIwY2M2LTUxZTQtMTFmMy0wMDAwLWU4MzgwNzcxMzdhMScgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJyBkYzpmb3JtYXQ9J2FwcGxpY2F0aW9uL3BkZic+PGRjOnRpdGxlPjxyZGY6QWx0PjxyZGY6bGkgeG1sOmxhbmc9J3gtZGVmYXVsdCc+VW50aXRsZWQ8L3JkZjpsaT48L3JkZjpBbHQ+PC9kYzp0aXRsZT48L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSd3Jz8+CmVuZHN0cmVhbQplbmRvYmoKMiAwIG9iago8PC9Qcm9kdWNlcihHUEwgR2hvc3RzY3JpcHQgOS4xOCkKL0NyZWF0aW9uRGF0ZShEOjIwMTgwMjI1MDEwNDA1WjAwJzAwJykKL01vZERhdGUoRDoyMDE4MDIyNTAxMDQwNVowMCcwMCcpCi9DcmVhdG9yKExpbHlQb25kIDIuMTguMik+PmVuZG9iagp4cmVmCjAgMjQKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwOTgzIDAwMDAwIG4gCjAwMDAwMTkyNjYgMDAwMDAgbiAKMDAwMDAwMDkyNCAwMDAwMCBuIAowMDAwMDAwNzE1IDAwMDAwIG4gCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwMDY5NiAwMDAwMCBuIAowMDAwMDAxMDQ4IDAwMDAwIG4gCjAwMDAwMDIwMzUgMDAwMDAgbiAKMDAwMDAwMjk1NCAwMDAwMCBuIAowMDAwMDAxMDg5IDAwMDAwIG4gCjAwMDAwMDI2ODIgMDAwMDAgbiAKMDAwMDAxMTY4NSAwMDAwMCBuIAowMDAwMDAxMjcyIDAwMDAwIG4gCjAwMDAwMDE0NTYgMDAwMDAgbiAKMDAwMDAwMTYzOSAwMDAwMCBuIAowMDAwMDAxODIzIDAwMDAwIG4gCjAwMDAwMDE5NjQgMDAwMDAgbiAKMDAwMDAwMTk5NCAwMDAwMCBuIAowMDAwMDAzMjYxIDAwMDAwIG4gCjAwMDAwMTE5MzcgMDAwMDAgbiAKMDAwMDAwMjU5MyAwMDAwMCBuIAowMDAwMDAyODQxIDAwMDAwIG4gCjAwMDAwMTc4NTggMDAwMDAgbiAKdHJhaWxlcgo8PCAvU2l6ZSAyNCAvUm9vdCAxIDAgUiAvSW5mbyAyIDAgUgovSUQgWzxBNjRENzE4NDAzQzM0MUZEQTJEODMxOEM1NDRERDg0QT48QTY0RDcxODQwM0MzNDFGREEyRDgzMThDNTQ0REQ4NEE+XQo+PgpzdGFydHhyZWYKMTk0MTUKJSVFT0YK";

	pdfSrc; // = "http://localhost:4200/assets/Highland-Cathedral.pdf";

    constructor() {}

    public ngOnInit() {
    	this.loadPdf(this.pdfTest);
    }

    public loadPdf(base64pdf) {
    	this.pdfSrc = this.base64ToArrayBuffer(base64pdf);
    }

	private base64ToArrayBuffer(base64) {
	    var binary_string =  window.atob(base64);
	    var len = binary_string.length;
	    var bytes = new Uint8Array( len );
	    for (var i = 0; i < len; i++)        {
	        bytes[i] = binary_string.charCodeAt(i);
	    }
	    return bytes.buffer;
	}
	
}