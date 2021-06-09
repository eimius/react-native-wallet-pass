require 'json'
version = JSON.parse(File.read('package.json'))["version"]

Pod::Spec.new do |s|

  s.name            = "react-native-wallet-pass"
  s.version         = version
  s.homepage        = "https://github.com/wix-incubator/react-native-wallet-pass"
  s.summary         = "React Native module to handle PassKit."
  s.license         = "MIT"
  s.author          = "Masayuki Iwai"
  s.platform        = :ios, "9.0"
  s.source          = { :git => "https://github.com/wix-incubator/react-native-wallet-pass.git", :tag => s.version.to_s }
  s.source_files    = "ios/RNPassKit/*.{h,m}"
  s.preserve_paths  = "**/*.js"

  s.dependency 'React'
end
