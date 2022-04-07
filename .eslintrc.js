module.exports = {
    "plugins": [
        // ...
        "react-hooks"
    ],
    "rules": {
        // ...
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
    },
    extends:[
        // 解决 eslint 和 prettier 的冲突 , 此项配置必须在最后
        'prettier',
    ]
}
