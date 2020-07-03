import React, { Component } from 'react'
import '../Styles/TellMyStory.css'
import { Link } from 'react-router-dom'

export class TellMyStory extends Component {
    state = {
        storySubmited: false,
        title: '',
        story: ''
    }

    submitStory = () => {
    const obj =  {user_first_name: this.props.loggedInUser.first_name, user_last_name: this.props.loggedInUser.last_name, story_title: this.state.title, sentance_1: this.state.story}
    this.setState({ storySubmited: true })
    fetch('http://localhost:3000/stories', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            accept: 'application/json'
        },
        body: JSON.stringify(obj)
    }).then(res => res.json()).then(obj => console.log(obj))
    }

    handleOnClick = event => this.setState({ [event.target.name]: event.target.value })

    render() {

        if (this.state.storySubmited) return <div className='your-story-submission'><h3>Thank you, your story will be reviewed shortly!</h3></div>
        return (
            <div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1440 50" preserveAspectRatio="xMaxYMid" aria-hidden="true" focusable="false">
                    <path d="M-90.6 63.2C-90.4 63.2-90.2 63.2-90 63.3L-88.5 68.6 -87.4 72.9 -71.9 129.9 -71.2 132.7 -61 170.5 -55.4 191.2 -28.6 290.2 -27.6 293.8 -23 310.9 -21.6 315.9 -18.5 327.3 -13 347.9 -5.8 374.3 -4.9 377.9 -2.9 385.3C-3.7 385.8-4 386.5-3.6 387.1L85.4 715.9C85.6 716.9 86.1 717.8 86.1 718.8 86.1 720.5 88.1 721.2 93.7 720.4 96.4 720 99.1 719.8 101.8 719.5 598.7 665.6 1095.6 611.7 1592.5 558 1602.2 556.9 1610.2 555.2 1618.4 553.2 1624.1 551.8 1627 550.2 1625.3 548.2 1623.4 546 1624.9 543.6 1627.2 541.2 1635 532.9 1634.2 525.1 1631.2 517.5 1630.1 514.8 1625.8 512.6 1625.7 509.8 1625.5 505.1 1620.4 501.2 1615.5 497.2 1609.9 492.7 1605.3 487.8 1611.1 481.9 1617 475.9 1629.7 470.1 1631 463.9L1617.3 413.3 1608.7 381.2 1590 312.1 1582.6 285 1562.2 209.5 1555.5 184.5C1549.2 186.9 1546.2 185.8 1543.1 184.9 1543.2 184.8 1543.4 184.7 1543.6 184.6 1545.4 181.3 1546.3 178.2 1541.5 175.6 1529.3 169 1522.5 161.6 1521.8 153 1521.3 146.3 1526 139 1518.9 132.9 1516.9 132.3 1514.6 131.9 1512.4 131.4 1510.8 127.2 1509.9 123 1508.9 118.9 1507.8 114.3 1504 111 1494.2 108.8 1494.7 108.3 1495.3 107.8 1496 107.2 1494.8 105.7 1493.9 104 1489.1 103.3 1483 102.4 1481.2 100.5 1480.3 98.3 1479.9 97.3 1480.5 96 1478.2 95.3 1466.6 91.7 1468.4 86.1 1467.9 80.8 1467.6 78.2 1466.2 75.7 1470.4 72.8 1475.9 69 1474.3 67.8 1463 67.4 1453 67 1443.3 66.3 1433.2 66 1414.1 65.5 1395.8 64.1 1375.8 64.6 1368.4 64.7 1361.5 65.1 1356.7 63.4 1353.8 62.3 1349.1 62.9 1345 63.6 1338.9 64.7 1334.8 64.4 1331.6 62.9 1328 61.3 1322.2 60.6 1315.5 60.4 1307.6 60.1 1300 59.4 1295.4 57.4 1291.2 55.6 1286.9 55.7 1280.1 57.4 1261.9 61.7 1242.1 64.6 1222.2 66.7 1196.9 69.3 1171.5 72 1147.4 69.8 1138.6 69.1 1131.6 68.3 1129 65.5 1124.1 60.2 1114.5 56.7 1095.2 56.6 1090.1 56.5 1084.9 56.7 1079.9 56.7 1065.8 56.6 1052.4 56.2 1040.4 54.3 1033.1 53.1 1028.5 51.2 1022.4 49.7 1014.3 47.9 1007.9 45.4 996.2 44.7 986.1 44 979.3 40.9 971.9 38.6 969.4 37.7 967 37.1 962.8 37.3 954.2 37.6 948.8 36.2 942.8 34.9 931.5 32.5 923.6 29 912.6 26.4 905.5 24.8 898 23.4 886.4 25.6 878.8 26.9 871.3 27.1 864.5 26.1 860.7 25.5 855.7 25.1 851.6 26.1 840.7 28.9 829.5 28.7 818.4 29.7 800.9 31.1 783.3 31.8 767.6 31.2 756.1 30.8 745.1 29.1 733.6 28.2 726.5 27.6 719.6 27 711.8 27.3 708.8 27.4 705.8 27.6 702.8 27.5 676.4 26.5 655.7 21.7 628.6 21.1 616.5 20.8 608.4 17.5 597.2 17.1 580.6 16.5 570.5 14.2 564.6 9.5 563 8.3 559.5 7.1 553.3 7.8 530.2 10.7 510.1 10.5 492.9 6.8 487.9 5.8 482.6 6.2 478.2 8.5 474.1 10.5 468 11.8 462.1 13.1 445.7 16.9 427.8 18 410.6 20.4 396.7 22.3 383.6 21.4 369.8 23.3 364.5 24 359.5 23.4 355.3 22.6 349 21.3 341.3 21.5 333.9 23.1 320 26 305.7 26.6 292 27.1 278.2 27.5 265 28.4 251.3 30.5 239.7 32.3 227.7 33.7 217.9 31.3 209.5 29.3 195.2 29.7 184.1 32.1 163.3 36.7 163.1 36.7 148.6 32.5 146.9 31.9 145.9 31.2 144.1 30.7 140.1 29.7 135.4 29.2 129.2 29.6 109.9 30.6 92.9 30.3 84.8 24.5 81.4 22.1 76.2 22.1 68.5 24.3 63.8 25.6 59.3 27 53.8 27.5 38.5 28.9 22.9 30.4 8.2 30.1 -10.7 29.6-30.4 30-49.8 30.8 -63.3 31.3-77.8 32.3-91.8 34.4 -97.2 35.2-98.7 36-98.2 37.6 -95.4 46.1-94.3 54.8-90.6 63.2Z" fill="#DAE5F3"></path>
                    <path d="M1646.3 75.2C1646.1 75.2 1645.9 75.2 1645.7 75.3L1644.2 80.6 1643.1 84.9 1627.6 141.9 1626.9 144.7 1616.7 182.5 1611.1 203.2 1584.3 302.2 1583.3 305.8 1578.7 322.9 1577.3 327.9 1574.2 339.3 1568.7 359.9 1561.5 386.3 1560.6 389.9 1558.6 397.3C1559.4 397.8 1559.7 398.5 1559.3 399.1L1470.3 727.9C1470.1 728.9 1469.6 729.8 1469.6 730.8 1469.6 732.5 1467.6 733.2 1461.9 732.4 1459.3 732 1456.6 731.8 1453.9 731.5 957 677.6 460.1 623.7-36.9 570 -46.5 568.9-54.5 567.2-62.7 565.2 -68.4 563.8-71.3 562.2-69.6 560.2 -67.7 558-69.2 555.6-71.5 553.2 -79.3 544.9-78.5 537.1-75.5 529.5 -74.4 526.9-70.1 524.6-70 521.8 -69.8 517.1-64.7 513.2-59.8 509.2 -54.2 504.7-49.6 499.8-55.4 493.9 -61.3 487.9-74 482.1-75.3 475.9L-61.6 425.3 -53 393.2 -34.3 324.1 -26.9 297 -6.5 221.5 0.2 196.5C6.5 198.9 9.5 197.8 12.6 196.9 12.5 196.8 12.3 196.7 12.1 196.6 10.3 193.3 9.4 190.2 14.2 187.6 26.4 181 33.2 173.6 33.9 165 34.4 158.3 29.7 151 36.8 144.9 38.8 144.3 41 143.9 43.3 143.4 44.9 139.2 45.8 135 46.8 130.9 47.9 126.3 51.7 123 61.5 120.8 61 120.3 60.4 119.8 59.7 119.2 60.9 117.7 61.8 116 66.6 115.3 72.7 114.4 74.5 112.5 75.4 110.3 75.8 109.3 75.2 108 77.5 107.3 89.1 103.7 87.3 98.1 87.8 92.8 88 90.2 89.5 87.7 85.3 84.8 79.8 81 81.4 79.8 92.7 79.4 102.7 79.1 112.4 78.3 122.5 78 141.6 77.5 159.9 76.1 179.9 76.6 187.3 76.7 194.2 77.1 199 75.4 201.9 74.3 206.6 74.9 210.7 75.6 216.8 76.7 220.9 76.4 224.1 74.9 227.7 73.3 233.5 72.6 240.2 72.4 248.1 72.1 255.7 71.4 260.3 69.4 264.5 67.6 268.8 67.7 275.6 69.4 293.8 73.7 313.6 76.6 333.5 78.7 358.8 81.3 384.2 84 408.3 81.8 417.1 81.1 424.1 80.3 426.7 77.5 431.6 72.2 441.2 68.7 460.5 68.6 465.6 68.5 470.8 68.7 475.8 68.7 489.9 68.6 503.3 68.2 515.3 66.3 522.6 65.1 527.2 63.2 533.3 61.7 541.4 59.9 547.8 57.4 559.5 56.7 569.6 56 576.4 52.9 583.8 50.6 586.3 49.7 588.7 49.1 592.9 49.3 601.5 49.7 606.9 48.2 612.9 46.9 624.2 44.5 632.1 41 643 38.4 650.1 36.8 657.7 35.4 669.3 37.6 676.9 38.9 684.4 39.1 691.2 38.1 695 37.5 700 37.1 704.1 38.1 715 40.9 726.2 40.7 737.3 41.7 754.8 43.1 772.4 43.8 788 43.2 799.6 42.8 810.5 41.1 822 40.2 829.2 39.6 836.1 39 843.9 39.3 846.9 39.4 849.9 39.6 852.9 39.5 879.3 38.5 900 33.7 927.1 33.1 939.2 32.8 947.3 29.5 958.5 29.1 975.1 28.5 985.2 26.2 991.1 21.5 992.7 20.3 996.2 19.1 1002.4 19.8 1025.5 22.7 1045.6 22.5 1062.8 18.8 1067.8 17.8 1073.1 18.2 1077.5 20.5 1081.6 22.5 1087.6 23.8 1093.6 25.1 1110 28.9 1127.9 30 1145.1 32.4 1159 34.3 1172.1 33.4 1185.9 35.3 1191.2 36 1196.2 35.4 1200.4 34.6 1206.7 33.3 1214.4 33.5 1221.8 35.1 1235.7 38 1250 38.6 1263.7 39.1 1277.5 39.5 1290.7 40.4 1304.4 42.5 1316 44.3 1328 45.7 1337.8 43.3 1346.2 41.3 1360.5 41.7 1371.6 44.1 1392.4 48.7 1392.6 48.7 1407 44.5 1408.8 43.9 1409.8 43.2 1411.6 42.7 1415.6 41.7 1420.3 41.2 1426.5 41.6 1445.8 42.6 1462.8 42.3 1470.9 36.5 1474.3 34.1 1479.5 34.1 1487.2 36.3 1491.9 37.6 1496.4 39 1501.9 39.5 1517.2 40.9 1532.8 42.4 1547.5 42.1 1566.4 41.6 1586.1 42 1605.5 42.8 1619 43.3 1633.5 44.3 1647.5 46.4 1652.9 47.2 1654.4 48 1653.9 49.6 1651.1 58.1 1650 66.8 1646.3 75.2Z" fill="#DAE5F3"></path>
                </svg>
                </div>
                <div className='prof-buttons-container'>
                <Link to='/profile/tellmystory'><button className="ui tiny button" tabindex="0">Tell My Story</button></Link>
                <Link to='/profile/edit'><button className="ui tiny button" tabindex="0">Edit Your Profile</button></Link>
                <Link to='/profile/messages'><button className="ui tiny button" tabindex="0">Messages</button></Link>
                <Link to='/profile/stats'><button className="ui tiny button" tabindex="0">My Sales Statistics</button></Link>
                <Link to='/profile'><button className="ui tiny button" tabindex="0">Profile</button></Link>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 20 1440 80" preserveAspectRatio="xMaxYMid" aria-hidden="true" focusable="false">
                    <path d="M1692.8 -90.2 C1692.6 -90.2 1692.4 -90.2 1692.1 -90.3 C-85.8 -51.3 -82.7 -50.5 -79.4 -49.9 -79.6 -49.8 -79.8 -49.7 -80 -49.6 -82.4 -46.1 -83.7 -42.9 -78.8 -40.8 -66.3 -35.4 -59.7 -28.6 -60 -20 -60.3 -13.3 -66.4 -5.6 -59.3 -0.2 -57.2 0.2 -54.8 0.5 -52.4 0.7 -51.2 4.7 -50.7 8.9 -50.1 12.9 -49.5 17.4 -45.8 20.4 -35.3 21.6 -35.9 22.1 -36.6 22.7 -37.5 23.4 -36.3 24.8 -35.5 26.4 -30.4 26.6 -23.8 26.9 -22 28.6 -21.3 30.7 -21 31.7 -21.8 33.1 -19.4 33.5 -7.2 36 -9.9 41.8 -10 47.1 -10 49.7 -8.7 52 -13.6 55.3 -20.1 59.7 -18.5 60.8 -6.3 60 4.7 59.4 15.2 59.2 26.2 58.4 47.1 57 66.9 56.7 88.8 54.2 96.9 53.3 104.5 52.2 109.6 53.5 112.6 54.3 117.8 53.2 122.3 52.1 129.2 50.4 133.7 50.2 137 51.4 140.7 52.7 146.9 52.8 154.2 52.4 162.9 51.9 171.1 51.9 175.9 53.4 180.2 54.8 185 54.2 192.6 51.9 213 45.7 235.1 40.8 257.1 36.8 285.1 31.7 313.2 26.4 339.4 26.2 348.9 26.1 356.4 26.1 358.9 28.7 363.7 33.6 373.7 36.1 394.8 34.3 400.4 33.9 406 33.2 411.6 32.7 426.9 31.4 441.6 30.4 454.5 31.2 462.3 31.6 467.1 33.1 473.6 33.9 482.2 35 489 36.8 501.7 36.4 512.6 36.1 519.7 38.5 527.5 40.1 530.1 40.7 532.6 41.1 537.2 40.5 546.7 39.3 552.5 40.2 558.8 40.9 570.9 42.2 579.2 45 590.8 46.4 598.4 47.3 606.4 48 619.4 44.7 627.9 42.5 636.1 41.7 643.4 42 647.5 42.1 653 42.1 657.5 40.7 669.8 36.8 682 35.8 694.3 33.8 713.6 30.6 732.9 28.2 750 27.2 762.6 26.5 774.4 27 786.8 26.9 794.6 26.8 802 26.6 810.6 25.6 813.9 25.2 817.2 24.6 820.5 24.5 849.2 22.9 871.3 25.7 900.8 23.6 914.1 22.6 922.5 25.1 934.7 24.4 952.9 23.4 963.6 24.7 969.5 28.8 971 29.8 974.8 30.7 981.6 29.3 1007.2 24.2 1029.2 22.4 1047.5 24.3 1052.9 24.9 1058.8 24 1063.9 21.2 1068.6 18.8 1075.4 16.9 1082 15 1100.5 9.5 1120.2 6.6 1139.3 2.5 1154.7 -0.7 1169 -1.2 1184.2 -4.4 1190.2 -5.7 1195.5 -5.6 1200 -5.2 1206.8 -4.5 1215.2 -5.5 1223.5 -7.8 1239.1 -12.1 1254.8 -14.1 1269.8 -15.9 1285 -17.8 1299.6 -20 1314.8 -23.5 1327.7 -26.4 1341 -29 1351.5 -27.6 1360.4 -26.3 1376 -28.2 1388.5 -31.7 1411.8 -38.4 1412 -38.4 1427.3 -35.6 1429.2 -35.2 1430.2 -34.6 1432.1 -34.3 1436.3 -33.7 1441.4 -33.7 1448.2 -34.6 1469.5 -37.6 1488 -39 1496.2 -34 1499.6 -31.9 1505.3 -32.4 1514 -35.4 1519.3 -37.2 1524.4 -39 1530.4 -40 1547.4 -43 1564.7 -46.1 1580.6 -47.2 1601.3 -48.6 1622.8 -50.9 1644.2 -53.6 1659 -55.5 1675 -58 1690.6 -61.5 1696.6 -62.9 1698.4 -63.8 1698 -65.3 1695.9 -73.6 1695.8 -82.2 1692.8 -90.2 Z" fill="#DAE5F3"></path>
                    <path d="M31.7 12.7 C31.9 12.7 32.1 12.6 32.3 12.6 C1808.2 -82.3 1805.2 -81.2 1801.9 -80.4 1802.1 -80.3 1802.3 -80.2 1802.5 -80.1 1805.1 -76.8 1806.7 -73.7 1802 -71.3 1789.9 -64.9 1783.9 -57.6 1784.8 -49.1 1785.6 -42.5 1792.3 -35.2 1785.6 -29.3 1783.5 -28.7 1781.2 -28.3 1778.8 -27.9 1777.9 -23.8 1777.7 -19.6 1777.4 -15.5 1777.1 -11 1773.6 -7.8 1763.3 -5.8 1763.9 -5.3 1764.6 -4.7 1765.6 -4.2 1764.5 -2.7 1763.9 -1 1758.8 -0.4 1752.3 0.4 1750.6 2.2 1750.1 4.4 1749.8 5.4 1750.7 6.7 1748.4 7.3 1736.4 10.7 1739.5 16.3 1739.9 21.5 1740.2 24.1 1739.1 26.6 1744.2 29.5 1751 33.4 1749.5 34.5 1737.2 34.7 1726.2 34.9 1715.8 35.5 1704.8 35.6 1683.8 35.8 1664.1 36.9 1642 36.1 1633.9 35.8 1626.2 35.3 1621.2 36.9 1618.3 37.9 1613 37.2 1608.4 36.5 1601.5 35.3 1596.9 35.5 1593.8 36.9 1590.1 38.5 1583.9 39.1 1576.6 39.2 1568 39.4 1559.8 40 1555.1 41.8 1550.9 43.5 1546.1 43.3 1538.3 41.6 1517.5 37 1495.1 33.7 1472.8 31.4 1444.6 28.4 1416.2 25.3 1390 27 1380.6 27.6 1373 28.2 1370.7 31 1366.4 36.2 1356.5 39.4 1335.4 39.3 1329.8 39.2 1324.1 39 1318.5 38.9 1303.1 38.8 1288.4 38.9 1275.6 40.6 1267.8 41.6 1263.2 43.5 1256.8 44.8 1248.2 46.5 1241.7 48.9 1229 49.4 1218.1 49.9 1211.1 52.9 1203.5 55 1200.9 55.8 1198.4 56.4 1193.8 56.2 1184.2 55.6 1178.6 57 1172.3 58.1 1160.4 60.3 1152.3 63.7 1140.8 66.1 1133.4 67.6 1125.4 68.8 1112.2 66.5 1103.6 65 1095.3 64.7 1088.1 65.6 1084 66.1 1078.5 66.5 1073.9 65.4 1061.3 62.4 1049.1 62.4 1036.7 61.3 1017.2 59.5 997.7 58.6 980.6 58.9 968.1 59.1 956.3 60.5 943.9 61.3 936.1 61.8 928.7 62.2 920 61.8 916.7 61.7 913.4 61.4 910.2 61.5 881.4 62 859.6 66.5 830 66.6 816.7 66.7 808.4 69.8 796.2 70 778.1 70.3 767.4 72.5 761.9 77 760.4 78.1 756.7 79.3 749.8 78.4 723.9 75.2 701.9 75.1 683.7 78.4 678.4 79.4 672.5 78.9 667.2 76.5 662.3 74.4 655.4 73.1 648.6 71.6 629.8 67.6 610 66.2 590.6 63.6 575 61.5 560.7 62.1 545.2 60 539.2 59.2 533.9 59.7 529.5 60.4 522.8 61.6 514.3 61.3 505.8 59.6 490 56.5 474.2 55.6 459.1 55 443.7 54.3 429.1 53.2 413.6 50.8 400.5 48.9 387 47.3 376.8 49.5 368 51.4 352.2 50.7 339.5 48.1 315.8 43.3 315.6 43.3 300.5 47.2 298.7 47.7 297.7 48.4 295.8 48.8 291.7 49.8 286.6 50.2 279.7 49.7 258.3 48.3 239.7 48.3 232 54 228.7 56.3 223 56.2 214 53.9 208.7 52.6 203.5 51.1 197.4 50.5 180.2 48.9 162.8 47.1 146.8 47.2 126 47.3 104.4 46.6 82.9 45.5 68 44.7 51.8 43.5 36 41.2 29.9 40.3 28.1 39.5 28.3 37.9 29.8 29.5 29.3 21 31.7 12.7 Z" fill="#DAE5F3"></path>
                </svg>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1440 50" preserveAspectRatio="xMaxYMid" aria-hidden="true" focusable="false">
                    <path d="M-90.6 63.2C-90.4 63.2-90.2 63.2-90 63.3L-88.5 68.6 -87.4 72.9 -71.9 129.9 -71.2 132.7 -61 170.5 -55.4 191.2 -28.6 290.2 -27.6 293.8 -23 310.9 -21.6 315.9 -18.5 327.3 -13 347.9 -5.8 374.3 -4.9 377.9 -2.9 385.3C-3.7 385.8-4 386.5-3.6 387.1L85.4 715.9C85.6 716.9 86.1 717.8 86.1 718.8 86.1 720.5 88.1 721.2 93.7 720.4 96.4 720 99.1 719.8 101.8 719.5 598.7 665.6 1095.6 611.7 1592.5 558 1602.2 556.9 1610.2 555.2 1618.4 553.2 1624.1 551.8 1627 550.2 1625.3 548.2 1623.4 546 1624.9 543.6 1627.2 541.2 1635 532.9 1634.2 525.1 1631.2 517.5 1630.1 514.8 1625.8 512.6 1625.7 509.8 1625.5 505.1 1620.4 501.2 1615.5 497.2 1609.9 492.7 1605.3 487.8 1611.1 481.9 1617 475.9 1629.7 470.1 1631 463.9L1617.3 413.3 1608.7 381.2 1590 312.1 1582.6 285 1562.2 209.5 1555.5 184.5C1549.2 186.9 1546.2 185.8 1543.1 184.9 1543.2 184.8 1543.4 184.7 1543.6 184.6 1545.4 181.3 1546.3 178.2 1541.5 175.6 1529.3 169 1522.5 161.6 1521.8 153 1521.3 146.3 1526 139 1518.9 132.9 1516.9 132.3 1514.6 131.9 1512.4 131.4 1510.8 127.2 1509.9 123 1508.9 118.9 1507.8 114.3 1504 111 1494.2 108.8 1494.7 108.3 1495.3 107.8 1496 107.2 1494.8 105.7 1493.9 104 1489.1 103.3 1483 102.4 1481.2 100.5 1480.3 98.3 1479.9 97.3 1480.5 96 1478.2 95.3 1466.6 91.7 1468.4 86.1 1467.9 80.8 1467.6 78.2 1466.2 75.7 1470.4 72.8 1475.9 69 1474.3 67.8 1463 67.4 1453 67 1443.3 66.3 1433.2 66 1414.1 65.5 1395.8 64.1 1375.8 64.6 1368.4 64.7 1361.5 65.1 1356.7 63.4 1353.8 62.3 1349.1 62.9 1345 63.6 1338.9 64.7 1334.8 64.4 1331.6 62.9 1328 61.3 1322.2 60.6 1315.5 60.4 1307.6 60.1 1300 59.4 1295.4 57.4 1291.2 55.6 1286.9 55.7 1280.1 57.4 1261.9 61.7 1242.1 64.6 1222.2 66.7 1196.9 69.3 1171.5 72 1147.4 69.8 1138.6 69.1 1131.6 68.3 1129 65.5 1124.1 60.2 1114.5 56.7 1095.2 56.6 1090.1 56.5 1084.9 56.7 1079.9 56.7 1065.8 56.6 1052.4 56.2 1040.4 54.3 1033.1 53.1 1028.5 51.2 1022.4 49.7 1014.3 47.9 1007.9 45.4 996.2 44.7 986.1 44 979.3 40.9 971.9 38.6 969.4 37.7 967 37.1 962.8 37.3 954.2 37.6 948.8 36.2 942.8 34.9 931.5 32.5 923.6 29 912.6 26.4 905.5 24.8 898 23.4 886.4 25.6 878.8 26.9 871.3 27.1 864.5 26.1 860.7 25.5 855.7 25.1 851.6 26.1 840.7 28.9 829.5 28.7 818.4 29.7 800.9 31.1 783.3 31.8 767.6 31.2 756.1 30.8 745.1 29.1 733.6 28.2 726.5 27.6 719.6 27 711.8 27.3 708.8 27.4 705.8 27.6 702.8 27.5 676.4 26.5 655.7 21.7 628.6 21.1 616.5 20.8 608.4 17.5 597.2 17.1 580.6 16.5 570.5 14.2 564.6 9.5 563 8.3 559.5 7.1 553.3 7.8 530.2 10.7 510.1 10.5 492.9 6.8 487.9 5.8 482.6 6.2 478.2 8.5 474.1 10.5 468 11.8 462.1 13.1 445.7 16.9 427.8 18 410.6 20.4 396.7 22.3 383.6 21.4 369.8 23.3 364.5 24 359.5 23.4 355.3 22.6 349 21.3 341.3 21.5 333.9 23.1 320 26 305.7 26.6 292 27.1 278.2 27.5 265 28.4 251.3 30.5 239.7 32.3 227.7 33.7 217.9 31.3 209.5 29.3 195.2 29.7 184.1 32.1 163.3 36.7 163.1 36.7 148.6 32.5 146.9 31.9 145.9 31.2 144.1 30.7 140.1 29.7 135.4 29.2 129.2 29.6 109.9 30.6 92.9 30.3 84.8 24.5 81.4 22.1 76.2 22.1 68.5 24.3 63.8 25.6 59.3 27 53.8 27.5 38.5 28.9 22.9 30.4 8.2 30.1 -10.7 29.6-30.4 30-49.8 30.8 -63.3 31.3-77.8 32.3-91.8 34.4 -97.2 35.2-98.7 36-98.2 37.6 -95.4 46.1-94.3 54.8-90.6 63.2Z" fill="#F8EBE6"></path>
                    <path d="M1646.3 75.2C1646.1 75.2 1645.9 75.2 1645.7 75.3L1644.2 80.6 1643.1 84.9 1627.6 141.9 1626.9 144.7 1616.7 182.5 1611.1 203.2 1584.3 302.2 1583.3 305.8 1578.7 322.9 1577.3 327.9 1574.2 339.3 1568.7 359.9 1561.5 386.3 1560.6 389.9 1558.6 397.3C1559.4 397.8 1559.7 398.5 1559.3 399.1L1470.3 727.9C1470.1 728.9 1469.6 729.8 1469.6 730.8 1469.6 732.5 1467.6 733.2 1461.9 732.4 1459.3 732 1456.6 731.8 1453.9 731.5 957 677.6 460.1 623.7-36.9 570 -46.5 568.9-54.5 567.2-62.7 565.2 -68.4 563.8-71.3 562.2-69.6 560.2 -67.7 558-69.2 555.6-71.5 553.2 -79.3 544.9-78.5 537.1-75.5 529.5 -74.4 526.9-70.1 524.6-70 521.8 -69.8 517.1-64.7 513.2-59.8 509.2 -54.2 504.7-49.6 499.8-55.4 493.9 -61.3 487.9-74 482.1-75.3 475.9L-61.6 425.3 -53 393.2 -34.3 324.1 -26.9 297 -6.5 221.5 0.2 196.5C6.5 198.9 9.5 197.8 12.6 196.9 12.5 196.8 12.3 196.7 12.1 196.6 10.3 193.3 9.4 190.2 14.2 187.6 26.4 181 33.2 173.6 33.9 165 34.4 158.3 29.7 151 36.8 144.9 38.8 144.3 41 143.9 43.3 143.4 44.9 139.2 45.8 135 46.8 130.9 47.9 126.3 51.7 123 61.5 120.8 61 120.3 60.4 119.8 59.7 119.2 60.9 117.7 61.8 116 66.6 115.3 72.7 114.4 74.5 112.5 75.4 110.3 75.8 109.3 75.2 108 77.5 107.3 89.1 103.7 87.3 98.1 87.8 92.8 88 90.2 89.5 87.7 85.3 84.8 79.8 81 81.4 79.8 92.7 79.4 102.7 79.1 112.4 78.3 122.5 78 141.6 77.5 159.9 76.1 179.9 76.6 187.3 76.7 194.2 77.1 199 75.4 201.9 74.3 206.6 74.9 210.7 75.6 216.8 76.7 220.9 76.4 224.1 74.9 227.7 73.3 233.5 72.6 240.2 72.4 248.1 72.1 255.7 71.4 260.3 69.4 264.5 67.6 268.8 67.7 275.6 69.4 293.8 73.7 313.6 76.6 333.5 78.7 358.8 81.3 384.2 84 408.3 81.8 417.1 81.1 424.1 80.3 426.7 77.5 431.6 72.2 441.2 68.7 460.5 68.6 465.6 68.5 470.8 68.7 475.8 68.7 489.9 68.6 503.3 68.2 515.3 66.3 522.6 65.1 527.2 63.2 533.3 61.7 541.4 59.9 547.8 57.4 559.5 56.7 569.6 56 576.4 52.9 583.8 50.6 586.3 49.7 588.7 49.1 592.9 49.3 601.5 49.7 606.9 48.2 612.9 46.9 624.2 44.5 632.1 41 643 38.4 650.1 36.8 657.7 35.4 669.3 37.6 676.9 38.9 684.4 39.1 691.2 38.1 695 37.5 700 37.1 704.1 38.1 715 40.9 726.2 40.7 737.3 41.7 754.8 43.1 772.4 43.8 788 43.2 799.6 42.8 810.5 41.1 822 40.2 829.2 39.6 836.1 39 843.9 39.3 846.9 39.4 849.9 39.6 852.9 39.5 879.3 38.5 900 33.7 927.1 33.1 939.2 32.8 947.3 29.5 958.5 29.1 975.1 28.5 985.2 26.2 991.1 21.5 992.7 20.3 996.2 19.1 1002.4 19.8 1025.5 22.7 1045.6 22.5 1062.8 18.8 1067.8 17.8 1073.1 18.2 1077.5 20.5 1081.6 22.5 1087.6 23.8 1093.6 25.1 1110 28.9 1127.9 30 1145.1 32.4 1159 34.3 1172.1 33.4 1185.9 35.3 1191.2 36 1196.2 35.4 1200.4 34.6 1206.7 33.3 1214.4 33.5 1221.8 35.1 1235.7 38 1250 38.6 1263.7 39.1 1277.5 39.5 1290.7 40.4 1304.4 42.5 1316 44.3 1328 45.7 1337.8 43.3 1346.2 41.3 1360.5 41.7 1371.6 44.1 1392.4 48.7 1392.6 48.7 1407 44.5 1408.8 43.9 1409.8 43.2 1411.6 42.7 1415.6 41.7 1420.3 41.2 1426.5 41.6 1445.8 42.6 1462.8 42.3 1470.9 36.5 1474.3 34.1 1479.5 34.1 1487.2 36.3 1491.9 37.6 1496.4 39 1501.9 39.5 1517.2 40.9 1532.8 42.4 1547.5 42.1 1566.4 41.6 1586.1 42 1605.5 42.8 1619 43.3 1633.5 44.3 1647.5 46.4 1652.9 47.2 1654.4 48 1653.9 49.6 1651.1 58.1 1650 66.8 1646.3 75.2Z" fill="#F8EBE6"></path>
                </svg>
                </div>
                <div className='add-pink-to-story'>
                <div className='your-story-submission'>
                <form className='ui big form'>
               <div className='two fieldss'>
                <div className='field'>
                <label><strong>Story Title</strong></label>        
                <input onChange={this.handleOnClick} value={this.state.title} name='title' placeholder='Story Title...'></input>
                <br></br>
                </div>
                <div className='field'>
                <label><strong>Story</strong></label>
                <textarea onChange={this.handleOnClick} value={this.state.story} name='story' placeholder='Tell your story ...'></textarea>
                <br></br>
                </div>
                <button onClick={this.submitStory} className='ui tiny button'>Submit Story</button>
                </div>
                </form>
                </div>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 20 1440 80" preserveAspectRatio="xMaxYMid" aria-hidden="true" focusable="false">
                    <path d="M1692.8 -90.2 C1692.6 -90.2 1692.4 -90.2 1692.1 -90.3 C-85.8 -51.3 -82.7 -50.5 -79.4 -49.9 -79.6 -49.8 -79.8 -49.7 -80 -49.6 -82.4 -46.1 -83.7 -42.9 -78.8 -40.8 -66.3 -35.4 -59.7 -28.6 -60 -20 -60.3 -13.3 -66.4 -5.6 -59.3 -0.2 -57.2 0.2 -54.8 0.5 -52.4 0.7 -51.2 4.7 -50.7 8.9 -50.1 12.9 -49.5 17.4 -45.8 20.4 -35.3 21.6 -35.9 22.1 -36.6 22.7 -37.5 23.4 -36.3 24.8 -35.5 26.4 -30.4 26.6 -23.8 26.9 -22 28.6 -21.3 30.7 -21 31.7 -21.8 33.1 -19.4 33.5 -7.2 36 -9.9 41.8 -10 47.1 -10 49.7 -8.7 52 -13.6 55.3 -20.1 59.7 -18.5 60.8 -6.3 60 4.7 59.4 15.2 59.2 26.2 58.4 47.1 57 66.9 56.7 88.8 54.2 96.9 53.3 104.5 52.2 109.6 53.5 112.6 54.3 117.8 53.2 122.3 52.1 129.2 50.4 133.7 50.2 137 51.4 140.7 52.7 146.9 52.8 154.2 52.4 162.9 51.9 171.1 51.9 175.9 53.4 180.2 54.8 185 54.2 192.6 51.9 213 45.7 235.1 40.8 257.1 36.8 285.1 31.7 313.2 26.4 339.4 26.2 348.9 26.1 356.4 26.1 358.9 28.7 363.7 33.6 373.7 36.1 394.8 34.3 400.4 33.9 406 33.2 411.6 32.7 426.9 31.4 441.6 30.4 454.5 31.2 462.3 31.6 467.1 33.1 473.6 33.9 482.2 35 489 36.8 501.7 36.4 512.6 36.1 519.7 38.5 527.5 40.1 530.1 40.7 532.6 41.1 537.2 40.5 546.7 39.3 552.5 40.2 558.8 40.9 570.9 42.2 579.2 45 590.8 46.4 598.4 47.3 606.4 48 619.4 44.7 627.9 42.5 636.1 41.7 643.4 42 647.5 42.1 653 42.1 657.5 40.7 669.8 36.8 682 35.8 694.3 33.8 713.6 30.6 732.9 28.2 750 27.2 762.6 26.5 774.4 27 786.8 26.9 794.6 26.8 802 26.6 810.6 25.6 813.9 25.2 817.2 24.6 820.5 24.5 849.2 22.9 871.3 25.7 900.8 23.6 914.1 22.6 922.5 25.1 934.7 24.4 952.9 23.4 963.6 24.7 969.5 28.8 971 29.8 974.8 30.7 981.6 29.3 1007.2 24.2 1029.2 22.4 1047.5 24.3 1052.9 24.9 1058.8 24 1063.9 21.2 1068.6 18.8 1075.4 16.9 1082 15 1100.5 9.5 1120.2 6.6 1139.3 2.5 1154.7 -0.7 1169 -1.2 1184.2 -4.4 1190.2 -5.7 1195.5 -5.6 1200 -5.2 1206.8 -4.5 1215.2 -5.5 1223.5 -7.8 1239.1 -12.1 1254.8 -14.1 1269.8 -15.9 1285 -17.8 1299.6 -20 1314.8 -23.5 1327.7 -26.4 1341 -29 1351.5 -27.6 1360.4 -26.3 1376 -28.2 1388.5 -31.7 1411.8 -38.4 1412 -38.4 1427.3 -35.6 1429.2 -35.2 1430.2 -34.6 1432.1 -34.3 1436.3 -33.7 1441.4 -33.7 1448.2 -34.6 1469.5 -37.6 1488 -39 1496.2 -34 1499.6 -31.9 1505.3 -32.4 1514 -35.4 1519.3 -37.2 1524.4 -39 1530.4 -40 1547.4 -43 1564.7 -46.1 1580.6 -47.2 1601.3 -48.6 1622.8 -50.9 1644.2 -53.6 1659 -55.5 1675 -58 1690.6 -61.5 1696.6 -62.9 1698.4 -63.8 1698 -65.3 1695.9 -73.6 1695.8 -82.2 1692.8 -90.2 Z" fill="#F8EBE6"></path>
                    <path d="M31.7 12.7 C31.9 12.7 32.1 12.6 32.3 12.6 C1808.2 -82.3 1805.2 -81.2 1801.9 -80.4 1802.1 -80.3 1802.3 -80.2 1802.5 -80.1 1805.1 -76.8 1806.7 -73.7 1802 -71.3 1789.9 -64.9 1783.9 -57.6 1784.8 -49.1 1785.6 -42.5 1792.3 -35.2 1785.6 -29.3 1783.5 -28.7 1781.2 -28.3 1778.8 -27.9 1777.9 -23.8 1777.7 -19.6 1777.4 -15.5 1777.1 -11 1773.6 -7.8 1763.3 -5.8 1763.9 -5.3 1764.6 -4.7 1765.6 -4.2 1764.5 -2.7 1763.9 -1 1758.8 -0.4 1752.3 0.4 1750.6 2.2 1750.1 4.4 1749.8 5.4 1750.7 6.7 1748.4 7.3 1736.4 10.7 1739.5 16.3 1739.9 21.5 1740.2 24.1 1739.1 26.6 1744.2 29.5 1751 33.4 1749.5 34.5 1737.2 34.7 1726.2 34.9 1715.8 35.5 1704.8 35.6 1683.8 35.8 1664.1 36.9 1642 36.1 1633.9 35.8 1626.2 35.3 1621.2 36.9 1618.3 37.9 1613 37.2 1608.4 36.5 1601.5 35.3 1596.9 35.5 1593.8 36.9 1590.1 38.5 1583.9 39.1 1576.6 39.2 1568 39.4 1559.8 40 1555.1 41.8 1550.9 43.5 1546.1 43.3 1538.3 41.6 1517.5 37 1495.1 33.7 1472.8 31.4 1444.6 28.4 1416.2 25.3 1390 27 1380.6 27.6 1373 28.2 1370.7 31 1366.4 36.2 1356.5 39.4 1335.4 39.3 1329.8 39.2 1324.1 39 1318.5 38.9 1303.1 38.8 1288.4 38.9 1275.6 40.6 1267.8 41.6 1263.2 43.5 1256.8 44.8 1248.2 46.5 1241.7 48.9 1229 49.4 1218.1 49.9 1211.1 52.9 1203.5 55 1200.9 55.8 1198.4 56.4 1193.8 56.2 1184.2 55.6 1178.6 57 1172.3 58.1 1160.4 60.3 1152.3 63.7 1140.8 66.1 1133.4 67.6 1125.4 68.8 1112.2 66.5 1103.6 65 1095.3 64.7 1088.1 65.6 1084 66.1 1078.5 66.5 1073.9 65.4 1061.3 62.4 1049.1 62.4 1036.7 61.3 1017.2 59.5 997.7 58.6 980.6 58.9 968.1 59.1 956.3 60.5 943.9 61.3 936.1 61.8 928.7 62.2 920 61.8 916.7 61.7 913.4 61.4 910.2 61.5 881.4 62 859.6 66.5 830 66.6 816.7 66.7 808.4 69.8 796.2 70 778.1 70.3 767.4 72.5 761.9 77 760.4 78.1 756.7 79.3 749.8 78.4 723.9 75.2 701.9 75.1 683.7 78.4 678.4 79.4 672.5 78.9 667.2 76.5 662.3 74.4 655.4 73.1 648.6 71.6 629.8 67.6 610 66.2 590.6 63.6 575 61.5 560.7 62.1 545.2 60 539.2 59.2 533.9 59.7 529.5 60.4 522.8 61.6 514.3 61.3 505.8 59.6 490 56.5 474.2 55.6 459.1 55 443.7 54.3 429.1 53.2 413.6 50.8 400.5 48.9 387 47.3 376.8 49.5 368 51.4 352.2 50.7 339.5 48.1 315.8 43.3 315.6 43.3 300.5 47.2 298.7 47.7 297.7 48.4 295.8 48.8 291.7 49.8 286.6 50.2 279.7 49.7 258.3 48.3 239.7 48.3 232 54 228.7 56.3 223 56.2 214 53.9 208.7 52.6 203.5 51.1 197.4 50.5 180.2 48.9 162.8 47.1 146.8 47.2 126 47.3 104.4 46.6 82.9 45.5 68 44.7 51.8 43.5 36 41.2 29.9 40.3 28.1 39.5 28.3 37.9 29.8 29.5 29.3 21 31.7 12.7 Z" fill="#F8EBE6"></path>
                </svg>
                </div>
            </div>
        )
    }
}

export default TellMyStory
