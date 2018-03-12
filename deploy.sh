build="dist"
dist="gh-pages"

if [ -d $dist ]; then
    rm -r $dist
fi

if [ ! -e $dist ]; then
    mkdir $dist
fi

cp index.html $dist
cp -r $build $dist/$build

gh-pages -d $dist -m "[AUTO] Update gh-pages"