// 链式代理自动设置脚本，需手动选择中继节点，需要节点名中含有"家宽"或"落地"才会生效，按需启用
// 如果想要设置链式代理的订阅没有包含以上字样，可以在单条订阅中添加一个正则命名操作，左侧设置为"$"，右侧设置为" 落地"
// ⚠️注意与自动链式代理设置脚本只能启用其中一个
const substringCountries = ['香港', '台湾', '日本', '美国', '韩国', '英国', '法国', '德国'];

// 定义允许的协议类型列表
const allowedProtocols = ['ss', 'socks5', 'http'];

// 调整外层判断条件：
// 1. 节点名称包含 '家宽' 或 '落地' (原条件)
// 2. 节点的代理协议类型在 allowedProtocols 列表中
if (($server.name.includes('家宽') || $server.name.includes('落地')) && allowedProtocols.includes($server.type)) {
  // 原有的重命名逻辑被包裹在这里面
  // 这个块只有在名字包含 '家宽' 或 '落地' 且协议是 shadowsocks, socks5, 或 http 时才会执行

  // 将所有满足条件的节点 underlying-proxy 设置为"中继节点"
  $server['underlying-proxy'] = '中继选择';
}
// 如果节点名称不包含 '家宽' 或 '落地'，或者协议不是 shadowsocks, socks5, 或 http，
// 则跳过上面的整个 if 块，$server['underlying-proxy'] 将不会被修改。
