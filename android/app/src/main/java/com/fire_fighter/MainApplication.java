package com.fire_fighter;

import android.app.Application;

import com.crashlytics.android.Crashlytics;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import com.airbnb.android.react.maps.MapsPackage;
import io.fabric.sdk.android.Fabric;
import java.util.List;
import com.reactnativecommunity.geolocation.GeolocationPackage;
import com.devfd.RNGeocoder.RNGeocoderPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      @SuppressWarnings("UnnecessaryLocalVariable")
      List<ReactPackage> packages = new PackageList(this).getPackages();
      new MapsPackage();
      new RNGeocoderPackage();
      new GeolocationPackage();
      new AsyncStoragePackage();
      new RNDeviceInfo();
      // Packages that cannot be autolinked yet can be added manually here, for
      // example:
      // packages.add(new MapsPackage());
      packages.add(new RNGestureHandlerPackage());

      return packages;
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    Fabric.with(this, new Crashlytics());
    SoLoader.init(this, /* native exopackage */ false);
  }
}
