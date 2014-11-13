from setuptools import setup, find_packages
import sys, os

version = '0.1'

setup(
    name='ckanext-datospy_theme',
    version=version,
    description="tema para el portal",
    long_description='''
    ''',
    classifiers=[], # Get strings from http://pypi.python.org/pypi?%3Aaction=list_classifiers
    keywords='',
    author='Rodrigo Valdez',
    author_email='rodri.valdez@gmail.com',
    url='',
    license='',
    packages=find_packages(exclude=['ez_setup', 'examples', 'tests']),
    namespace_packages=['ckanext', 'ckanext.datospy_theme'],
    include_package_data=True,
    zip_safe=False,
    install_requires=[
        # -*- Extra requirements: -*-
    ],
    entry_points='''
        [ckan.plugins]
        # Add plugins here, e.g.
        # myplugin=ckanext.datospy_theme.plugin:PluginClass
	datospy_theme=ckanext.datospy_theme.plugin:DatosPyThemePlugin
    ''',
)
