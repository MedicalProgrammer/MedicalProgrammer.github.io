#rm -rf build
npm run build
rm -rf docs
mkdir docs
cp -r build/* docs
