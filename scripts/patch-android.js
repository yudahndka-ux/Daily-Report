// Menambahkan izin kamera ke AndroidManifest.xml
const fs = require('fs');
const f = 'android/app/src/main/AndroidManifest.xml';
let m = fs.readFileSync(f, 'utf8');
if (!m.includes('android.permission.CAMERA')) {
  m = m.replace('<application',
    '<uses-permission android:name="android.permission.CAMERA" />\n    <uses-feature android:name="android.hardware.camera" android:required="false" />\n    <application');
  fs.writeFileSync(f, m);
}
console.log('Manifest diperbarui');
